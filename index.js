module.exports = {
    gattDefs: {
        service: [
            { name: 'dInServ', uuid: '0xbb00' },
            { name: 'aInServ', uuid: '0xbb10' },
            { name: 'environServ', uuid: '0xbb50' },
            { name: 'buzzerServ', uuid: '0xbb60' }
        ],
        characteristic: [
            { name: 'aInConfig', uuid: '0xbb11', params: ['config'], types: ['boolean'] },
            { name: 'aInMeasPeriod', uuid: '0xbb12', params: ['period'], types: ['uint8'] },
            { name: 'gasConfig', uuid: '0xbb51', params: ['config'], types: ['boolean'] },
            { name: 'gasMeasPeriod', uuid: '0xbb52', params: ['period'], types: ['uint8'] },
            { name: 'gasOption', uuid: '0xbb53', params: ['option'], types: ['uint8'] },
            { name: 'gasThreshold', uuid: '0xbb54', params: ['threshold'], types: ['uint16'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Gas Alarm Sensor')
            isMine = true;

        return isMine;
    }
};
