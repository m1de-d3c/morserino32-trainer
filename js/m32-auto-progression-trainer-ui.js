const log  = require ('loglevel');

const { createElement } = require('./dom-utils');

const { EVENT_M32_TEXT_RECEIVED } = require('./m32-communication-service');

class AutoProgressionUI {
    constructor(m32CommunicationService) {
        this.receiveText = document.getElementById("receiveTextAutoProgression");
        this.clearButton = document.getElementById("clearAutoProgressionButton");

        this.m32CommunicationService = m32CommunicationService;
        this.activeMode = false;
    }

    textReceived(value) {
        if (this.activeMode) {
            this.receiveText.value += value;
            //Scroll to the bottom of the text field
            this.receiveText.scrollTop = this.receiveText.scrollHeight;
        }
    }

    modeSelected(mode) {
        this.activeMode = mode === 'auto-progression-trainer';
        log.debug("auto progression trainer active", this.activeMode, mode);
    }
}

module.exports = { AutoProgressionUI }