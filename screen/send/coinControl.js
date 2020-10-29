import React, { useMemo, useState, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import _debounce from 'lodash/debounce';
import Modal from 'react-native-modal';
import { ListItem, Avatar, Badge } from 'react-native-elements';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';
import { useRoute, useTheme, useNavigation } from '@react-navigation/native';

import loc, { formatBalanceWithoutSuffix } from '../../loc';
import { BitcoinUnit } from '../../models/bitcoinUnits';
import { BlueNavigationStyle, SafeBlueArea, BlueSpacing10, BlueSpacing20, BlueButton, BlueListItem } from '../../BlueComponents';
import { BlueStorageContext } from '../../blue_modules/storage-context';

const oStyles = StyleSheet.create({
  container: { backgroundColor: 'transparent' },
  containerFull: { paddingHorizontal: 0 },
  avatar: { borderColor: 'white', borderWidth: 1 },
  amount: { fontWeight: 'bold' },
  memo: { fontSize: 13, marginTop: 3 },
  changeLight: { backgroundColor: '#EEF0F4' },
  changeDark: { backgroundColor: '#3b3b3c', borderWidth: 0 },
  changeText: { color: '#9BA0A9' },
  freezeLight: { backgroundColor: '#F2D3D3' },
  freezeDark: { backgroundColor: '#5a4e4e', borderWidth: 0 },
  freezeText: { color: '#FC6D6D' },
});

const Output = ({ item: { address, txid, value, vout }, oMemo, frozen, change = false, full = false, onPress }) => {
  const { colors } = useTheme();
  const { txMetadata } = useContext(BlueStorageContext);
  const cs = useColorScheme();
  const memo = oMemo || txMetadata[txid]?.memo || '';
  const fullId = `${txid}:${vout}`;
  const shortId = `${address.substring(0, 9)}...${address.substr(address.length - 9)}`;
  const color = `#${txid.substring(0, 6)}`;
  const amount = formatBalanceWithoutSuffix(value, BitcoinUnit.BTC, true);

  return (
    <ListItem bottomDivider onPress={onPress} containerStyle={[oStyles.container, full && oStyles.containerFull]}>
      <Avatar rounded overlayContainerStyle={[oStyles.avatar, { backgroundColor: color }]} />
      <ListItem.Content>
        <ListItem.Title style={[oStyles.amount, { color: colors.foregroundColor }]}>{amount}</ListItem.Title>
        {full ? (
          <>
            {memo ? (
              <>
                <ListItem.Subtitle style={[oStyles.memo, { color: colors.alternativeTextColor }]}>{memo}</ListItem.Subtitle>
                <BlueSpacing10 />
              </>
            ) : null}
            <ListItem.Subtitle style={[oStyles.memo, { color: colors.alternativeTextColor }]}>{address}</ListItem.Subtitle>
            <BlueSpacing10 />
            <ListItem.Subtitle style={[oStyles.memo, { color: colors.alternativeTextColor }]}>{fullId}</ListItem.Subtitle>
          </>
        ) : (
          <ListItem.Subtitle style={[oStyles.memo, { color: colors.alternativeTextColor }]} numberOfLines={1}>
            {memo || shortId}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>
      {change && (
        <Badge value={loc.cc.change} badgeStyle={oStyles[cs === 'dark' ? 'changeDark' : 'changeLight']} textStyle={oStyles.changeText} />
      )}
      {frozen && (
        <Badge value={loc.cc.freeze} badgeStyle={oStyles[cs === 'dark' ? 'freezeDark' : 'freezeLight']} textStyle={oStyles.freezeText} />
      )}
    </ListItem>
  );
};

Output.propTypes = {
  item: PropTypes.shape({
    address: PropTypes.string.isRequired,
    txid: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    vout: PropTypes.number.isRequired,
  }),
  oMemo: PropTypes.string,
  frozen: PropTypes.bool,
  change: PropTypes.bool,
  full: PropTypes.bool,
  onPress: PropTypes.func,
};

const mStyles = StyleSheet.create({
  memoTextInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomWidth: 0.5,
    minHeight: 44,
    height: 44,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#81868e',
  },
});

const OutputModalContent = ({ output, wallet, onUseCoin }) => {
  const { colors } = useTheme();
  const { txMetadata, saveToDisk } = useContext(BlueStorageContext);
  const [frozen, setFrozen] = useState(wallet.getUTXOMetadata(output.txid, output.vout).frozen || false);
  const [memo, setMemo] = useState(wallet.getUTXOMetadata(output.txid, output.vout).memo || txMetadata[output.txid]?.memo || '');
  const onMemoChange = value => setMemo(value);
  const switchValue = useMemo(() => ({ value: frozen, onValueChange: value => setFrozen(value) }), [frozen, setFrozen]);

  // save on form change. Because effect called on each event, debounce it.
  const debouncedSave = useRef(
    _debounce(async (frozen, memo) => {
      wallet.setUTXOMetadata(output.txid, output.vout, { frozen, memo });
      await saveToDisk();
    }, 500),
  );
  useEffect(() => {
    debouncedSave.current(frozen, memo);
  }, [frozen, memo]);

  return (
    <>
      <Output item={output} full />
      <BlueSpacing20 />
      <TextInput
        placeholder={loc.send.details_note_placeholder}
        value={memo}
        placeholderTextColor="#81868e"
        style={[
          mStyles.memoTextInput,
          {
            borderColor: colors.formBorder,
            borderBottomColor: colors.formBorder,
            backgroundColor: colors.inputBackgroundColor,
          },
        ]}
        onChangeText={onMemoChange}
      />
      <BlueListItem title={loc.cc.freezeLabel} Component={TouchableWithoutFeedback} switch={switchValue} />
      <BlueSpacing20 />
      <BlueButton title={loc.cc.useCoin} onPress={() => onUseCoin([output])} />
    </>
  );
};

OutputModalContent.propTypes = {
  output: PropTypes.object,
  wallet: PropTypes.object,
  onUseCoin: PropTypes.func.isRequired,
};

const CoinControl = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { walletId, onUTXOChoose } = useRoute().params;
  const { wallets } = useContext(BlueStorageContext);
  const wallet = wallets.find(w => w.getID() === walletId);
  const utxo = useMemo(
    // sort by height ascending, txid , vout ascending
    () => wallet.getUtxo({ frozen: true }).sort((a, b) => a.height - b.height || a.txid.localeCompare(b.txid) || a.vout - b.vout),
    [wallet],
  );
  const [output, setOutput] = useState();

  const handleChoose = item => setOutput(item);

  const handleUseCoin = utxo => {
    setOutput(null);
    navigation.pop();
    onUTXOChoose(utxo);
  };

  const renderItem = p => {
    const { memo, frozen } = wallet.getUTXOMetadata(p.item.txid, p.item.vout);
    const change = wallet.addressIsChange(p.item.address);
    return <Output item={p.item} oMemo={memo} frozen={frozen} change={change} onPress={() => handleChoose(p.item)} />;
  };

  return (
    <SafeBlueArea style={[styles.root, { backgroundColor: colors.elevated }]}>
      {utxo.length === 0 && (
        <View style={styles.empty}>
          <Text style={{ color: colors.foregroundColor }}>{loc.cc.empty}</Text>
        </View>
      )}
      <Modal
        isVisible={Boolean(output)}
        style={styles.bottomModal}
        onBackdropPress={() => {
          Keyboard.dismiss();
          setOutput(false);
        }}
      >
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : null}>
          <View style={[styles.modalContent, { backgroundColor: colors.elevated }]}>
            {output && <OutputModalContent output={output} wallet={wallet} onUseCoin={handleUseCoin} />}
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <FlatList data={utxo} renderItem={renderItem} keyExtractor={item => `${item.txid}:${item.vout}`} />
    </SafeBlueArea>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    padding: 22,
    justifyContent: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    minHeight: 360,
    height: 360,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CoinControl.navigationOptions = () => ({
  ...BlueNavigationStyle(null, false),
  title: loc.cc.header,
  gestureEnabled: false,
});

export default CoinControl;
