const m32ProtocolFallbackLanguage = 'en'; 

function translateMenu(key, language) {
    return translate(key, language, menuTranslations);
};

function translateConfig(key, language) {
    return translate(key, language, configTranslations);
};

function translate(key, language, i18nMap) {
    var translationMap = i18nMap[key.trim().toLowerCase()];
    if (!translationMap) {
        return key;
    }
    var translation = translationMap[language];
    if (translation) {
        return translation;
    }
    if (language === m32ProtocolFallbackLanguage) {
        return key; // no fallback
    } 
    // try fallback language
    translation = translationMap[m32ProtocolFallbackLanguage];
    if (translation) {
        return translation;
    }
    return key;
        
}


menuTranslations = {
    'koch trainer': {de: 'Koch Trainer'},
        // koch lessons
        '13 char .': {en: '13 char dot'},
        '21 char ,': {en: '21 char comma'},
        '24 char /': {en: '24 char slash'},
        '32 char ?': {en: '32 char questionmark'},
        '41 char -': {en: '41 char minus'},
        '51 char :': {en: '51 char colon'},
      'cw generator': {de: 'CW Generator'},
        'random': {de: 'Zufall'},
        'cw abbrevs': {en: 'CW Abbreviations', de: 'CW Abkürzungen'},
        'english words': {de: 'Englische Worte'},
        'mixed': {de: 'Gemischt'},
      'cw generator': {de: 'CW Generator'},
      'select lesson': {de: 'Auswahl Lektion'},
      'learn new chr': {en: 'Learn new Character', de: 'Lerne neue Buchstaben'},
      'echo trainer': {},
        'call signs': {de: 'Rufzeichen'},
        'file player': {de: 'Datei abspielen'},
    'tranceiver': {en: 'Transceiver', de: 'Transceiver'},
      'lora trx': {en: 'Lora Transceiver', de: 'Lora Transceiver'},
      'wifi trx': {en: 'WiFi Transceiver', de: 'WLAN Tranceiver'},
      'icw/ext trx': {en: 'iCW/External Tranceiver', de: 'iCW/Externer Tranceiver'},
    'cw decoder': {},
    'wifi functions': {de: 'WLAN Funktionen'},
      'check wifi': {de: 'WLAN Prüfen'},
      'upload file': {de: 'Datei hochladen'},
      'config wifi': {en: 'Configure Wifi', de: 'Konfiguriere WLAN'},
      'update firmw': {en: 'Update Firmware', de: 'Firmware aktualisieren'},
      'wifi select': {de: 'WLAN auswählen'},
      'disp mac addr': {en: 'Display Mac Address', de: 'Zeige Mac Adresse'},
    'go to sleep': {de: 'Geh Schlafen'},
    'cw keyer': {},
      'ext trx': {en: 'External Transceiver', de: 'Externer Tranceiver'},
}

configTranslations = {
    'paddle polar.': {en: 'Paddle Polarity'},
    'external pol.': {en: 'External Polarity'},
    'curtisb daht%': {en: 'Curtis B Mode dah Timing Percentage'},
    'curtisb ditt%': {en: 'Curtis B Mode dit Timing Percentage'},
    'AutoChar Spc': {en: 'Auto Character Space'},
    'interword spc': {en: 'Inter word Space'},
    'interchar spc': {en: 'Inter character Space'},
    'length rnd gr': {en: 'Length Random Groups'},
    'length abbrev': {en: 'Length Abbreviations'},
    'max # of words': {en: 'Maximum Number of Words'},
    'cw gen displ': {en: 'CW Generator Display'},
    'each word 2x': {en: 'Each Word 2 times'},
    'confrm. tone': {en: 'Confirm Tone'},
    'key ext tx': {en: 'Key External Transmit'},
    'generator tx': {en: 'Generator Transmit'},
    'adaptv. speed': {en: 'Adaptive Speed'},
    'stop/next/rep': {en: 'Stop Next Repeat'},
    // values
    'custom chars':  {en: 'Custom Characters'},
    'bc1: r e a':  {en: 'BC1: r. e. a'},
}