module.exports = {
    gattDefs: {
        service: [
            { name: 'environServ', uuid: '0xbb50' },
            { name: 'buzzerServ', uuid: '0xbb60' }
        ],
        characteristic: [
            { name: 'gasMeasPeriod', uuid: '0xbb51', params: ['period'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Gas Sht Sensor' &&
            basicInfo.model === 'GasShtSensor' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            isMine = true;

        return isMine;
    }
};