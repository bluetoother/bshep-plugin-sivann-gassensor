module.exports = {
    gattDefs: {
        service: [
            { name: 'dinServ', uuid: '0xbb00' },
            { name: 'ainServ', uuid: '0xbb10' },
            { name: 'environServ', uuid: '0xbb50' },
            { name: 'buzzerServ', uuid: '0xbb60' }
        ],
        characteristic: [
            { name: 'ainMeasPeriod', uuid: '0xbb11', params: ['period'], types: ['uint8'] },
            { name: 'gasMeasPeriod', uuid: '0xbb51', params: ['period'], types: ['uint8'] }
        ]
     },
     analysis: function (periph, basicInfo) {
        var checkFlag = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Gas Sht Sensor' &&
            basicInfo.model === 'GasShtSensor' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            checkFlag = true;

        return checkFlag;
    }
};