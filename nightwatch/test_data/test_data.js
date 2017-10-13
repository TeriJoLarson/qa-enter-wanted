module.exports = {
    transactions: {
        minimumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'KE',
                oai: 'CHI1234SI',
                nam: 'Bob',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Red',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.KE.CHI1234SI.Bob.M.W.607.200.Red.Arson.05022016......'
            }
        },
        maxinumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789howboutdat',
                mke: '@MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Larry Dresdenisaredblob',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brownblobs',
                off: 'Arsonandmurders',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789howboutdat.@MKE.CHI1234SI.Harry Larry Dresdenisaredblob.M.W.607.200.Brownblobs.Arsonandmurders.05022016......'
            }
        },
        olnOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        olsOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: 'UT',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },

        licOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '263982468',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        lisOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: 'UT',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        liyOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: '2015'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If License Plate, License State, or License Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },
        lessThanRequired: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '1234',
                mke: 'M',
                oai: 'CHIAA',
                nam: 'Jo',
                sex: 'F',
                rac: 'C',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: '2015'
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    hdr: `The "Header" field should be between 9 and 19 characters long.`,
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''

            }
        }
    }
}

