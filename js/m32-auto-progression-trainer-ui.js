const log  = require ('loglevel');

const { createElement } = require('./dom-utils');

const { EVENT_M32_TEXT_RECEIVED } = require('./m32-communication-service');

class AutoProgressionUI {
    constructor(m32CommunicationService) {
        this.m32CommunicationService = m32CommunicationService;
    }

    modeSelected(mode) {
        this.activeMode = mode === 'auto-progression-trainer';
        log.debug("auto progression trainer active", this.activeMode, mode);
    }
}

module.exports = { AutoProgressionUI }