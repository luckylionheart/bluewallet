module.exports = {
  _: {
    storage_is_encrypted: 'Tallennustilasi on salattu. Salasana vaaditaan sen purkamiseksi',
    enter_password: 'Anna salasana',
    bad_password: 'Väärä salasana, yritä uudelleen',
    never: 'ei koskaan',
    continue: 'Jatka',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Valitse Lompakko',
    options: 'valinnat',
    createBitcoinWallet:
      'Sinulla ei tällä hetkellä ole Bitcoin lompakkoa. Rahoittaaksesi Lightning lompakkoa, Bitcoin lompakko tulee tuoda tai luoda. Haluatko kuitenkin jatkaa?',
    list: {
      app_name: 'BlueWallet',
      title: 'lompakot',
      header:
        'Lompakko koostuu salaisesta avaimesta (private key) sekä julkisesta osoitteesta' +
        ',jonka voit jakaa vastaanottaaksesi kolikoita.',
      add: 'Lisää Lompakko',
      create_a_wallet: 'Luo lompakko',
      create_a_wallet1: 'Se on ilmaista ja voit luoda',
      create_a_wallet2: 'niin monta kuin haluat',
      latest_transaction: 'viimeisin siirto',
      empty_txs1: 'Siirtosi näkyvät tässä,',
      empty_txs2: 'ei siirtoja',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Napsauta tästä ostaaksesi Bitcoinia',
    },
    reorder: {
      title: 'Järjestele Lompakot',
    },
    add: {
      title: 'lisää lompakko',
      description:
        'Voit joko skannata paperisen lompakon (WIF - Wallet Import Format), tai luoda uuden. Segwit lompakkoja tuetaan oletuksena.',
      scan: 'Skannaa',
      create: 'Luo',
      label_new_segwit: 'Uusi SegWit',
      label_new_lightning: 'Uusi Lightning',
      wallet_name: 'nimi',
      wallet_type: 'tyyppi',
      or: 'tai',
      import_wallet: 'Tuo lompakko',
      imported: 'Tuotu',
      coming_soon: 'Tulossa',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Lompakko',
      address: 'Osoite',
      type: 'Tyyppi',
      label: 'Etiketti',
      destination: 'määränpää',
      description: 'kuvaus',
      are_you_sure: 'Oletko varma?',
      yes_delete: 'Kyllä, poista',
      no_cancel: 'En, peruuta',
      delete: 'Poista',
      save: 'Tallenna',
      delete_this_wallet: 'Poista tämä lompakko',
      export_backup: 'Vie / varmuuskopioi',
      buy_bitcoin: 'Osta Bitcoinia',
      show_xpub: 'Näytä lompakon XPUB',
    },
    export: {
      title: 'lompakon vienti',
    },
    xpub: {
      title: 'lompakon XPUB',
      copiedToClipboard: 'Kopioitu leikepöydälle.',
    },
    import: {
      title: 'tuo',
      explanation:
        'Kirjoita tähän muistisanasi, private key, WIF tai jotain mitä sinulla on. BlueWallet tekee parhaansa arvatakseen oikean muodon ja tuo lompakkosi',
      imported: 'Tuotu',
      error: 'Tuonti epäonnistui. Varmista, että annettu tieto on oikein',
      success: 'Onnistui',
      do_import: 'Tuo',
      scan_qr: 'tai skannaa QR-koodi?',
    },
    scanQrWif: {
      go_back: 'Mene Takaisin',
      cancel: 'Peruuta',
      decoding: 'Dekoodataan',
      input_password: 'Anna salasana',
      password_explain: 'Tämä on BIP38 salattu private key',
      bad_password: 'Väärä salasana',
      wallet_already_exists: 'Lompakko on jo olemassa',
      bad_wif: 'Väärä WIF',
      imported_wif: 'WIF tuotu ',
      with_address: ' osoitteella ',
      imported_segwit: 'SegWit tuotu',
      imported_legacy: 'Legacy tuotu',
      imported_watchonly: 'Watch-only tuotu',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Siirrot',
      title: 'siirrot',
      description: 'Lompakkojesi saapuvat ja lähtevät siirrot',
      conf: 'conf',
    },
    details: {
      title: 'Siirto',
      from: 'Input',
      to: 'Output',
      copy: 'Kopioi',
      transaction_details: 'Siirron tiedot',
      show_in_block_explorer: 'Näytä lohkoketjuselaimessa',
    },
  },
  send: {
    header: 'Lähetä',
    details: {
      title: 'luo siirto',
      amount_field_is_not_valid: 'Määrä ei kelpaa',
      fee_field_is_not_valid: 'Siirtokulu ei kelpaa',
      address_field_is_not_valid: 'Osoite ei kelpaa',
      total_exceeds_balance: 'Lähetettävä summa ylittää katteen',
      create_tx_error: 'Virhe siirron luonnissa. Varmista, että osoite on oikein.',
      address: 'osoite',
      amount_placeholder: 'lähetettävä summa (BTC)',
      fee_placeholder: 'plus siirtokulu (BTC)',
      note_placeholder: 'muistiinpano',
      cancel: 'Peruuta',
      scan: 'Skannaa',
      send: 'Lähetä',
      create: 'Luo',
      remaining_balance: 'Jäljellä oleva kate',
    },
    confirm: {
      header: 'Vahvista',
      sendNow: 'Lähetä nyt',
    },
    success: {
      done: 'Valmis',
    },
    create: {
      details: 'Tiedot',
      title: 'luo siirto',
      error: 'Virhe siirron luonnissa. Väärä osoite tai lähetettävä summa?',
      go_back: 'Mene Takaisin',
      this_is_hex: 'Tämä on siirron hex, allekirjoitettu ja valmis kuulutettavaksi verkkoon.',
      to: 'Vastaanottaja',
      amount: 'Summa',
      fee: 'Kulu',
      tx_size: 'TX koko',
      satoshi_per_byte: 'Satoshia per tavu',
      memo: 'Memo',
      broadcast: 'Kuuluta',
      not_enough_fee: 'Kulu ei riitä. Korota kulua.',
    },
  },
  receive: {
    header: 'Vastaanota',
    details: {
      title: 'Jaa tämä osoite maksajalle',
      share: 'jaa',
      copiedToClipboard: 'Kopioitu leikepöydälle.',
      label: 'Selite',
      create: 'Luo',
      setAmount: 'Vastaanotettava summa',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: 'Osta Bitcoinia',
    tap_your_address: 'Napsauta osoitettasi kopioidaksesi sen leikepöydälle:',
    copied: 'Kopioitu leikepöydälle!',
  },
  settings: {
    header: 'asetukset',
    plausible_deniability: 'Uskottava kiistettävyys...',
    storage_not_encrypted: 'Tallennustila: salaamaton',
    storage_encrypted: 'Tallennustila: salattu',
    password: 'Salasana',
    password_explain: 'Luo salasana, jota käytät tallennustilan salauksen purkamiseen',
    retype_password: 'Salasana uudelleen',
    passwords_do_not_match: 'Salasanat eivät täsmää',
    encrypt_storage: 'Salaa tallennustila',
    lightning_settings: 'Lightning asetukset',
    lightning_settings_explain:
      'Yhdistääksesi omaan LND noodiin, asenna LndHub' +
      ' ja laita sen URL tänne. Jätä tyhjäksi käyttääksesi BlueWalletin LNDHubia (lndhub.io). Muutosten tallentamisen jälkeen luodut lompakot yhdistävät annettuun LNDHubiin.',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'Tallenna',
    about: 'Tietoa',
    language: 'Kieli',
    currency: 'Valuutta',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Uskottava Kiistettävyys',
    help:
      'Joissain tilanteissa, saatat olla pakotettu kertomaan ' +
      'salasanasi. Pitääksesi kolikkosi turvassa, BlueWallet voi luoda toisen ' +
      'salatun tallennustilan, toisella salasanalla. Paineen alla, ' +
      'voit kertoa tämän salasanan kolmannelle osapuolelle. Annettaessa ' +
      'BlueWalletiin, se avaa uuden väärennetyn tallennustilan. Se näyttää ' +
      'oikealta kolmannelle osapuolelle, mutta pitää oikean tallennustilasi ' +
      'kolikkoineen turvassa.',
    help2: 'Uusi tallennustila näyttää täysin toimivalta, ja voit säilyttää ' + 'pieniä summia siellä, jotta se näyttää uskottavalta.',
    create_fake_storage: 'Luo väärennetty tallennustila',
    go_back: 'Mene Takaisin',
    create_password: 'Luo salasana',
    create_password_explanation: 'Väärennetyn tallennustilan salasanan ei tule täsmätä oikean tallennustilan salasanan kanssa',
    password_should_not_match: 'Väärennetyn tallennustilan salasanan ei tule täsmätä oikean tallennustilan salasanan kanssa',
    retype_password: 'Salasana uudelleen',
    passwords_do_not_match: 'Salasanat eivät täsmää, yritä uudelleen',
    success: 'Onnistui',
  },
  lnd: {
    title: 'hallinnoi varoja',
    choose_source_wallet: 'Valitse lähdelompakko',
    refill_lnd_balance: 'Täytä Lightning lompakon katetta',
    refill: 'Täytä',
    withdraw: 'Nosta',
    expired: 'Erääntynyt',
    placeholder: 'Lasku',
    sameWalletAsInvoiceError: 'Et voi maksaa laskua samalla lompakolla, jolla se on luotu.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
