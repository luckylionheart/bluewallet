module.exports = {
  _: {
    storage_is_encrypted: 'Ваше хранилище зашифровано. Введите пароль для расшифровки',
    enter_password: 'Введите пароль',
    bad_password: 'Неверный пароль, попробуйте еще раз',
    months_ago: 'месяцев назад',
    days_ago: 'дней назад',
    hours_ago: 'часов назад',
    minutes_ago: 'минут назад',
    never: 'никогда',
  },
  wallets: {
    options: 'options',
    list: {
      app_name: 'BlueWallet',
      title: 'кошельки',
      header: 'Кошелек это секретный (приватный) ключ, и соответствующий ему адрес на который можно получать биткоины',
      add: 'Добавить Кошелек',
      create_a_wallet: 'Создать кошелек',
      create_a_wallet1: 'Это бесплатно и вы можете создать',
      create_a_wallet2: 'неограниченное количество',
      latest_transaction: 'последняя транзакция',
      empty_txs1: 'Список транзакций пока пуст',
      empty_txs2: ' ',
    },
    add: {
      title: 'добавить кошелек',
      description:
        'Вы можете отсканировать QR код (в формате WIF - Wallet Import Format), или создать новый кошелек. Segwit поддерживается по умолчанию.',
      scan: 'Отсканировать',
      create: 'Создать',
      label_new_segwit: 'Новый SegWit',
      wallet_name: 'имя кошелька',
      wallet_type: 'тип кошелька',
      or: 'or',
      import_wallet: 'Импортировать кошелек',
      imported: 'Импортирован',
      coming_soon: 'Пока недоступно',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Информация о Кошельке',
      address: 'Адрес',
      type: 'Тип',
      label: 'Метка',
      are_you_sure: 'Вы уверены?',
      yes_delete: 'Да, удалить',
      no_cancel: 'Нет, отмена',
      delete_this_wallet: 'Удалить этот кошелек',
      export_backup: 'Экспорт / резервная копия',
    },
    export: {
      title: 'Экспорт Кошелька',
    },
    import: {
      title: 'import',
      explanation: 'Напишите тут вашу мнемонику, приватный ключ, WIF, что угодно, BlueWallet постарается угадать верный формат',
      imported: 'Импортирован',
      error: 'Не удалось импортировать',
      success: 'Успех',
      do_import: 'Импортировать',
      scan_qr: 'или отсканировать QR код?',
    },
    scanQrWif: {
      go_back: 'Назад',
      cancel: 'Отмена',
      decoding: 'Декодирую',
      input_password: 'Введите пароль',
      password_explain: 'Приватный ключ зашифрован по стандарту BIP38',
      bad_password: 'Неверный пароль',
      wallet_already_exists: 'Такой кошелек уже существует',
      bad_wif: 'Некорректный WIF',
      imported_wif: 'Импортирован WIF ',
      with_address: ' с адресом ',
      imported_segwit: 'Импортированый SegWit',
      imported_legacy: 'Импортированый Legacy',
      imported_watchonly: 'Импортированый Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Транзакции',
      title: 'Мои транзакции',
      description: 'Список входящих или исходящих транзакций ваших кошельков',
      conf: 'подтв.',
    },
    details: {
      title: 'Детали транзакци',
      from: 'От',
      to: 'Кому',
      copy: 'копировать',
    },
  },
  send: {
    header: 'Отправить',
    details: {
      title: 'Создать Транзакцию',
      amount_field_is_not_valid: 'Поле не валидно',
      fee_field_is_not_valid: 'Поле `комиссия` не валидно',
      address_field_is_not_valid: 'Поле `адрес` не валидно',
      receiver_placeholder: 'Адрес получателя',
      amount_placeholder: 'сколько отправить (в BTC)',
      fee_placeholder: 'плюс комиссия за перевод (в BTC)',
      note_placeholder: 'примечание платежа',
      cancel: 'Отмена',
      scan: 'Скан QR',
      create: 'Создать',
      send: 'Send',
      address: 'Address',
      total_exceeds_balance: 'Total amount exceeds balance.',
      remaining_balance: 'Остаток баланса',
    },
    create: {
      title: 'Создать Транзакцию',
      error: 'Ошибка при создании транзакции. Неправильный адрес назначения или недостаточно средств?',
      go_back: 'Назад',
      this_is_hex: 'Это данные транзакции. Транзакция подписана и готова быть транслирована в сеть. Продолжить?',
      to: 'Куда',
      amount: 'Сколько',
      fee: 'Комиссия',
      tx_size: 'Размер',
      satoshi_per_byte: 'Сатоши на байт',
      memo: 'Примечание',
      broadcast: 'Отправить',
      not_enough_fee: 'Слишком маленькая комиссия. Увеличьте комиссию',
    },
  },
  receive: {
    header: 'Получить',
    details: {
      title: 'Покажите этот адрес плательщику',
      share: 'Отправить',
      copiedToClipboard: 'скопировано',
    },
  },
  settings: {
    tabBarLabel: 'Настройки',
    header: 'Настройки',
    plausible_deniability: 'Правдоподобное отрицание...',
    storage_not_encrypted: 'Хранилище: не зашифровано',
    storage_encrypted: 'Хранилище: зашифровано',
    password: 'Пароль',
    password_explain: 'Придумайте пароль для расшифровки хранилища',
    retype_password: 'Наберите пароль повторно',
    passwords_do_not_match: 'Пароли не совпадают',
    encrypt_storage: 'Зашифровать хранилище',
    about: 'О программе',
    language: 'Язык',
    currency: 'Валюта',
  },
  plausibledeniability: {
    title: 'Правдоподобное Отрицание',
    help:
      'При определенных обстоятельствах вас могут вынудить раскрыть пароль. ' +
      'Чтобы сохранить ваши биткоины в безопасности, BlueWallet может создать ' +
      'еще одно зашифрованое хранилище, с другим паролем. Под давлением, ' +
      'вы можете раскрыть третьим лицам этот пароль. Если ввести этот пароль в ' +
      "BlueWallet, разблокируется 'фальшивое' хранилище. Это будет выглядеть " +
      'правдоподобно для третьих лиц, но при этом сохранит ваше основное хранилище ' +
      'с биткоинами в безопасности.',
    help2:
      'Новое хранилище будет полностью функциональным и вы даже можете хранить на нем немного биткоинов ' +
      'чтобы это выглядело более правдоподобно.',
    create_fake_storage: 'Создать фальшивое хранилище',
    go_back: 'Назад',
    create_password: 'Придумайте пароль',
    create_password_explanation: 'Пароль для фальшивого хранилища не должен быть таким же как основной пароль',
    password_should_not_match: 'Пароль для фальшивого хранилища не должен быть таким же как основной пароль',
    retype_password: 'Наберите пароль повторно',
    passwords_do_not_match: 'Пароли не совпадают, попробуйте еще раз',
    success: 'Операция успешна',
  },
  lnd: {
    title: 'мои средства',
    choose_source_wallet: 'Выберите с какого кошелька',
    refill_lnd_balance: 'Пополнить баланс Lightning кошелька',
    refill: 'Пополнить',
    withdraw: 'Вывести',
  },
};
