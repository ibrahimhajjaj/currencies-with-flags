    // Author Ibrahim Hajjaj
    // @ibrahimwithi
    // This JavaScript file will create a currencies json from [Currencies.json, flags, country alpha2], The final result would be like this
    // [
    //     {
    //         "code": "AED",
    //         "name": "UAE Dirham",
    //         "country": "United Arab Emirates",
    //         "countryCode": "AE",
    //         "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr"
    //     },
    //     ...
    //     ...
    //     ...
    // ]
    // Support Currencies by https://docs.openexchangerates.org/docs/supported-currencies
    const inputCurrencies = [
      {
        code: "AED",
        name: "UAE Dirham",
        country: "United Arab Emirates"
      },
      {
        code: "AFN",
        name: "Afghan Afghani",
        country: "Afghanistan"
      },
      {
        code: "ALL",
        name: "Albanian Lek",
        country: "Albania"
      },
      {
        code: "AMD",
        name: "Armenian Dram",
        country: "Armenia"
      },
      {
        code: "ANG",
        name: "Netherlands Antillian Guilder",
        country: "Netherlands Antilles"
      },
      {
        code: "AOA",
        name: "Angolan Kwanza",
        country: "Angola"
      },
      {
        code: "ARS",
        name: "Argentine Peso",
        country: "Argentina"
      },
      {
        code: "AUD",
        name: "Australian Dollar",
        country: "Australia"
      },
      {
        code: "AWG",
        name: "Aruban Florin",
        country: "Aruba"
      },
      {
        code: "AZN",
        name: "Azerbaijani Manat",
        country: "Azerbaijan"
      },
      {
        code: "BAM",
        name: "Bosnia and Herzegovina Mark",
        country: "Bosnia and Herzegovina"
      },
      {
        code: "BBD",
        name: "Barbados Dollar",
        country: "Barbados"
      },
      {
        code: "BDT",
        name: "Bangladeshi Taka",
        country: "Bangladesh"
      },
      {
        code: "BGN",
        name: "Bulgarian Lev",
        country: "Bulgaria"
      },
      {
        code: "BHD",
        name: "Bahraini Dinar",
        country: "Bahrain"
      },
      {
        code: "BIF",
        name: "Burundian Franc",
        country: "Burundi"
      },
      {
        code: "BMD",
        name: "Bermudian Dollar",
        country: "Bermuda"
      },
      {
        code: "BND",
        name: "Brunei Dollar",
        country: "Brunei Darussalam"
      },
      {
        code: "BOB",
        name: "Bolivian Boliviano",
        country: "Bolivia"
      },
      {
        code: "BRL",
        name: "Brazilian Real",
        country: "Brazil"
      },
      {
        code: "BSD",
        name: "Bahamian Dollar",
        country: "Bahamas"
      },
      {
        code: "BTN",
        name: "Bhutanese Ngultrum",
        country: "Bhutan"
      },
      {
        code: "BWP",
        name: "Botswana Pula",
        country: "Botswana"
      },
      {
        code: "BYN",
        name: "Belarusian Ruble",
        country: "Belarus"
      },
      {
        code: "BZD",
        name: "Belize Dollar",
        country: "Belize"
      },
      {
        code: "CAD",
        name: "Canadian Dollar",
        country: "Canada"
      },
      {
        code: "CDF",
        name: "Congolese Franc",
        country: "Democratic Republic of the Congo"
      },
      {
        code: "CHF",
        name: "Swiss Franc",
        country: "Switzerland"
      },
      {
        code: "CLP",
        name: "Chilean Peso",
        country: "Chile"
      },
      {
        code: "CNY",
        name: "Chinese Renminbi",
        country: "China"
      },
      {
        code: "COP",
        name: "Colombian Peso",
        country: "Colombia"
      },
      {
        code: "CRC",
        name: "Costa Rican Colon",
        country: "Costa Rica"
      },
      {
        code: "CUP",
        name: "Cuban Peso",
        country: "Cuba"
      },
      {
        code: "CVE",
        name: "Cape Verdean Escudo",
        country: "Cape Verde"
      },
      {
        code: "CZK",
        name: "Czech Koruna",
        country: "Czech Republic"
      },
      {
        code: "DJF",
        name: "Djiboutian Franc",
        country: "Djibouti"
      },
      {
        code: "DKK",
        name: "Danish Krone",
        country: "Denmark"
      },
      {
        code: "DOP",
        name: "Dominican Peso",
        country: "Dominican Republic"
      },
      {
        code: "DZD",
        name: "Algerian Dinar",
        country: "Algeria"
      },
      {
        code: "EGP",
        name: "Egyptian Pound",
        country: "Egypt"
      },
      {
        code: "ERN",
        name: "Eritrean Nakfa",
        country: "Eritrea"
      },
      {
        code: "ETB",
        name: "Ethiopian Birr",
        country: "Ethiopia"
      },
      {
        code: "EUR",
        name: "Euro",
        country: "European Union"
      },
      {
        code: "FJD",
        name: "Fiji Dollar",
        country: "Fiji"
      },
      {
        code: "FKP",
        name: "Falkland Islands Pound",
        country: "Falkland Islands"
      },
      {
        code: "FOK",
        name: "Faroese Króna",
        country: "Faroe Islands"
      },
      {
        code: "GBP",
        name: "Pound Sterling",
        country: "United Kingdom"
      },
      {
        code: "GEL",
        name: "Georgian Lari",
        country: "Georgia"
      },
      {
        code: "GGP",
        name: "Guernsey Pound",
        country: "Guernsey"
      },
      {
        code: "GHS",
        name: "Ghanaian Cedi",
        country: "Ghana"
      },
      {
        code: "GIP",
        name: "Gibraltar Pound",
        country: "Gibraltar"
      },
      {
        code: "GMD",
        name: "Gambian Dalasi",
        country: "The Gambia"
      },
      {
        code: "GNF",
        name: "Guinean Franc",
        country: "Guinea"
      },
      {
        code: "GTQ",
        name: "Guatemalan Quetzal",
        country: "Guatemala"
      },
      {
        code: "GYD",
        name: "Guyanese Dollar",
        country: "Guyana"
      },
      {
        code: "HKD",
        name: "Hong Kong Dollar",
        country: "Hong Kong"
      },
      {
        code: "HNL",
        name: "Honduran Lempira",
        country: "Honduras"
      },
      {
        code: "HRK",
        name: "Croatian Kuna",
        country: "Croatia"
      },
      {
        code: "HTG",
        name: "Haitian Gourde",
        country: "Haiti"
      },
      {
        code: "HUF",
        name: "Hungarian Forint",
        country: "Hungary"
      },
      {
        code: "IDR",
        name: "Indonesian Rupiah",
        country: "Indonesia"
      },
      {
        code: "ILS",
        name: "Israeli New Shekel",
        country: "Israel"
      },
      {
        code: "IMP",
        name: "Manx Pound",
        country: "Isle of Man"
      },
      {
        code: "INR",
        name: "Indian Rupee",
        country: "India"
      },
      {
        code: "IQD",
        name: "Iraqi Dinar",
        country: "Iraq"
      },
      {
        code: "IRR",
        name: "Iranian Rial",
        country: "Iran"
      },
      {
        code: "ISK",
        name: "Icelandic Króna",
        country: "Iceland"
      },
      {
        code: "JEP",
        name: "Jersey Pound",
        country: "Jersey"
      },
      {
        code: "JMD",
        name: "Jamaican Dollar",
        country: "Jamaica"
      },
      {
        code: "JOD",
        name: "Jordanian Dinar",
        country: "Jordan"
      },
      {
        code: "JPY",
        name: "Japanese Yen",
        country: "Japan"
      },
      {
        code: "KES",
        name: "Kenyan Shilling",
        country: "Kenya"
      },
      {
        code: "KGS",
        name: "Kyrgyzstani Som",
        country: "Kyrgyzstan"
      },
      {
        code: "KHR",
        name: "Cambodian Riel",
        country: "Cambodia"
      },
      {
        code: "KID",
        name: "Kiribati Dollar",
        country: "Kiribati"
      },
      {
        code: "KMF",
        name: "Comorian Franc",
        country: "Comoros"
      },
      {
        code: "KRW",
        name: "South Korean Won",
        country: "South Korea"
      },
      {
        code: "KWD",
        name: "Kuwaiti Dinar",
        country: "Kuwait"
      },
      {
        code: "KYD",
        name: "Cayman Islands Dollar",
        country: "Cayman Islands"
      },
      {
        code: "KZT",
        name: "Kazakhstani Tenge",
        country: "Kazakhstan"
      },
      {
        code: "LAK",
        name: "Lao Kip",
        country: "Laos"
      },
      {
        code: "LBP",
        name: "Lebanese Pound",
        country: "Lebanon"
      },
      {
        code: "LKR",
        name: "Sri Lanka Rupee",
        country: "Sri Lanka"
      },
      {
        code: "LRD",
        name: "Liberian Dollar",
        country: "Liberia"
      },
      {
        code: "LSL",
        name: "Lesotho Loti",
        country: "Lesotho"
      },
      {
        code: "LYD",
        name: "Libyan Dinar",
        country: "Libya"
      },
      {
        code: "MAD",
        name: "Moroccan Dirham",
        country: "Morocco"
      },
      {
        code: "MDL",
        name: "Moldovan Leu",
        country: "Moldova"
      },
      {
        code: "MGA",
        name: "Malagasy Ariary",
        country: "Madagascar"
      },
      {
        code: "MKD",
        name: "Macedonian Denar",
        country: "North Macedonia"
      },
      {
        code: "MMK",
        name: "Burmese Kyat",
        country: "Myanmar"
      },
      {
        code: "MNT",
        name: "Mongolian Tögrög",
        country: "Mongolia"
      },
      {
        code: "MOP",
        name: "Macanese Pataca",
        country: "Macau"
      },
      {
        code: "MRU",
        name: "Mauritanian Ouguiya",
        country: "Mauritania"
      },
      {
        code: "MUR",
        name: "Mauritian Rupee",
        country: "Mauritius"
      },
      {
        code: "MVR",
        name: "Maldivian Rufiyaa",
        country: "Maldives"
      },
      {
        code: "MWK",
        name: "Malawian Kwacha",
        country: "Malawi"
      },
      {
        code: "MXN",
        name: "Mexican Peso",
        country: "Mexico"
      },
      {
        code: "MYR",
        name: "Malaysian Ringgit",
        country: "Malaysia"
      },
      {
        code: "MZN",
        name: "Mozambican Metical",
        country: "Mozambique"
      },
      {
        code: "NAD",
        name: "Namibian Dollar",
        country: "Namibia"
      },
      {
        code: "NGN",
        name: "Nigerian Naira",
        country: "Nigeria"
      },
      {
        code: "NIO",
        name: "Nicaraguan Córdoba",
        country: "Nicaragua"
      },
      {
        code: "NOK",
        name: "Norwegian Krone",
        country: "Norway"
      },
      {
        code: "NPR",
        name: "Nepalese Rupee",
        country: "Nepal"
      },
      {
        code: "NZD",
        name: "New Zealand Dollar",
        country: "New Zealand"
      },
      {
        code: "OMR",
        name: "Omani Rial",
        country: "Oman"
      },
      {
        code: "PAB",
        name: "Panamanian Balboa",
        country: "Panama"
      },
      {
        code: "PEN",
        name: "Peruvian Sol",
        country: "Peru"
      },
      {
        code: "PGK",
        name: "Papua New Guinean Kina",
        country: "Papua New Guinea"
      },
      {
        code: "PHP",
        name: "Philippine Peso",
        country: "Philippines"
      },
      {
        code: "PKR",
        name: "Pakistani Rupee",
        country: "Pakistan"
      },
      {
        code: "PLN",
        name: "Polish Złoty",
        country: "Poland"
      },
      {
        code: "PYG",
        name: "Paraguayan Guaraní",
        country: "Paraguay"
      },
      {
        code: "QAR",
        name: "Qatari Riyal",
        country: "Qatar"
      },
      {
        code: "RON",
        name: "Romanian Leu",
        country: "Romania"
      },
      {
        code: "RSD",
        name: "Serbian Dinar",
        country: "Serbia"
      },
      {
        code: "RUB",
        name: "Russian Ruble",
        country: "Russia"
      },
      {
        code: "RWF",
        name: "Rwandan Franc",
        country: "Rwanda"
      },
      {
        code: "SAR",
        name: "Saudi Riyal",
        country: "Saudi Arabia"
      },
      {
        code: "SBD",
        name: "Solomon Islands Dollar",
        country: "Solomon Islands"
      },
      {
        code: "SCR",
        name: "Seychellois Rupee",
        country: "Seychelles"
      },
      {
        code: "SDG",
        name: "Sudanese Pound",
        country: "Sudan"
      },
      {
        code: "SEK",
        name: "Swedish Krona",
        country: "Sweden"
      },
      {
        code: "SGD",
        name: "Singapore Dollar",
        country: "Singapore"
      },
      {
        code: "SHP",
        name: "Saint Helena Pound",
        country: "Saint Helena"
      },
      {
        code: "SLL",
        name: "Sierra Leonean Leone",
        country: "Sierra Leone"
      },
      {
        code: "SOS",
        name: "Somali Shilling",
        country: "Somalia"
      },
      {
        code: "SRD",
        name: "Surinamese Dollar",
        country: "Suriname"
      },
      {
        code: "SSP",
        name: "South Sudanese Pound",
        country: "South Sudan"
      },
      {
        code: "STN",
        name: "Sao Tome and Principe Dobra",
        country: "Sao Tome and Principe"
      },
      {
        code: "SYP",
        name: "Syrian Pound",
        country: "Syria"
      },
      {
        code: "SZL",
        name: "Eswatini Lilangeni",
        country: "Eswatini"
      },
      {
        code: "THB",
        name: "Thai Baht",
        country: "Thailand"
      },
      {
        code: "TJS",
        name: "Tajikistani Somoni",
        country: "Tajikistan"
      },
      {
        code: "TMT",
        name: "Turkmenistan Manat",
        country: "Turkmenistan"
      },
      {
        code: "TND",
        name: "Tunisian Dinar",
        country: "Tunisia"
      },
      {
        code: "TOP",
        name: "Tongan Paʻanga",
        country: "Tonga"
      },
      {
        code: "TRY",
        name: "Turkish Lira",
        country: "Turkey"
      },
      {
        code: "TTD",
        name: "Trinidad and Tobago Dollar",
        country: "Trinidad and Tobago"
      },
      {
        code: "TVD",
        name: "Tuvaluan Dollar",
        country: "Tuvalu"
      },
      {
        code: "TWD",
        name: "New Taiwan Dollar",
        country: "Taiwan"
      },
      {
        code: "TZS",
        name: "Tanzanian Shilling",
        country: "Tanzania"
      },
      {
        code: "UAH",
        name: "Ukrainian Hryvnia",
        country: "Ukraine"
      },
      {
        code: "UGX",
        name: "Ugandan Shilling",
        country: "Uganda"
      },
      {
        code: "USD",
        name: "United States Dollar",
        country: "United States"
      },
      {
        code: "UYU",
        name: "Uruguayan Peso",
        country: "Uruguay"
      },
      {
        code: "UZS",
        name: "Uzbekistani So'm",
        country: "Uzbekistan"
      },
      {
        code: "VES",
        name: "Venezuelan Bolíconst Soberano",
        country: "Venezuela"
      },
      {
        code: "VND",
        name: "Vietnamese Đồng",
        country: "Vietnam"
      },
      {
        code: "VUV",
        name: "Vanuatu Vatu",
        country: "Vanuatu"
      },
      {
        code: "WST",
        name: "Samoan Tālā",
        country: "Samoa"
      },
      {
        code: "XOF",
        name: "West African CFA franc",
        country: "CFA"
      },
      {
        code: "YER",
        name: "Yemeni Rial",
        country: "Yemen"
      },
      {
        code: "ZAR",
        name: "South African Rand",
        country: "South Africa"
      },
      {
        code: "ZMW",
        name: "Zambian Kwacha",
        country: "Zambia"
      },
      {
        code: "ZWL",
        name: "Zimbabwean Dollar",
        country: "Zimbabwe"
      }
    ];
    // A Json File that I found here https://dzone.com/articles/list-of-all-countries-in-json
    // In additions to that I've added some countries manually and made some adjustments on some country name
    const inputCountry_W_Name_Code = [
        {"name":"Vietnam", "code": "vn"},
        {"name":"Laos", "code": "la"},
        {"name":"South Sudan", "code": "ss"},
        {"name":"North Macedonia", "code": "mk"},
        {"name":"European Union", "code": "eu"},
        {"name":"Macau", "code": "mi"},
        {"name": "Afghanistan", "code": "AF"},
        {"name": "land Islands", "code": "AX"},
        {"name": "Albania", "code": "AL"},
        {"name": "Algeria", "code": "DZ"},
        {"name": "American Samoa", "code": "AS"},
        {"name": "AndorrA", "code": "AD"},
        {"name": "Angola", "code": "AO"},
        {"name": "Anguilla", "code": "AI"},
        {"name": "Antarctica", "code": "AQ"},
        {"name": "Antigua and Barbuda", "code": "AG"},
        {"name": "Argentina", "code": "AR"},
        {"name": "Armenia", "code": "AM"},
        {"name": "Aruba", "code": "AW"},
        {"name": "Australia", "code": "AU"},
        {"name": "Austria", "code": "AT"},
        {"name": "Azerbaijan", "code": "AZ"},
        {"name": "Bahamas", "code": "BS"},
        {"name": "Bahrain", "code": "BH"},
        {"name": "Bangladesh", "code": "BD"},
        {"name": "Barbados", "code": "BB"},
        {"name": "Belarus", "code": "BY"},
        {"name": "Belgium", "code": "BE"},
        {"name": "Belize", "code": "BZ"},
        {"name": "Benin", "code": "BJ"},
        {"name": "Bermuda", "code": "BM"},
        {"name": "Bhutan", "code": "BT"},
        {"name": "Bolivia", "code": "BO"},
        {"name": "Bosnia and Herzegovina", "code": "BA"},
        {"name": "Botswana", "code": "BW"},
        {"name": "Bouvet Island", "code": "BV"},
        {"name": "Brazil", "code": "BR"},
        {"name": "British Indian Ocean Territory", "code": "IO"},
        {"name": "Brunei Darussalam", "code": "BN"},
        {"name": "Bulgaria", "code": "BG"},
        {"name": "Burkina Faso", "code": "BF"},
        {"name": "Burundi", "code": "BI"},
        {"name": "Cambodia", "code": "KH"},
        {"name": "Cameroon", "code": "CM"},
        {"name": "Canada", "code": "CA"},
        {"name": "Cape Verde", "code": "CV"},
        {"name": "Cayman Islands", "code": "KY"},
        {"name": "CFA", "code": "CF"},
        {"name": "Chad", "code": "TD"},
        {"name": "Chile", "code": "CL"},
        {"name": "China", "code": "CN"},
        {"name": "Christmas Island", "code": "CX"},
        {"name": "Cocos (Keeling) Islands", "code": "CC"},
        {"name": "Colombia", "code": "CO"},
        {"name": "Comoros", "code": "KM"},
        {"name": "Congo", "code": "CG"},
        {"name": "Democratic Republic of the Congo", "code": "CD"},
        {"name": "Cook Islands", "code": "CK"},
        {"name": "Costa Rica", "code": "CR"},
        {"name": "Cote D\"Ivoire", "code": "CI"},
        {"name": "Croatia", "code": "HR"},
        {"name": "Cuba", "code": "CU"},
        {"name": "Cyprus", "code": "CY"},
        {"name": "Czech Republic", "code": "CZ"},
        {"name": "Denmark", "code": "DK"},
        {"name": "Djibouti", "code": "DJ"},
        {"name": "Dominica", "code": "DM"},
        {"name": "Dominican Republic", "code": "DO"},
        {"name": "Ecuador", "code": "EC"},
        {"name": "Egypt", "code": "EG"},
        {"name": "El Salvador", "code": "SV"},
        {"name": "Equatorial Guinea", "code": "GQ"},
        {"name": "Eritrea", "code": "ER"},
        {"name": "Estonia", "code": "EE"},
        {"name": "Ethiopia", "code": "ET"},
        {"name": "Falkland Islands", "code": "FK"},
        {"name": "Faroe Islands", "code": "FO"},
        {"name": "Fiji", "code": "FJ"},
        {"name": "Finland", "code": "FI"},
        {"name": "France", "code": "FR"},
        {"name": "French Guiana", "code": "GF"},
        {"name": "French Polynesia", "code": "PF"},
        {"name": "French Southern Territories", "code": "TF"},
        {"name": "Gabon", "code": "GA"},
        {"name": "The Gambia", "code": "GM"},
        {"name": "Georgia", "code": "GE"},
        {"name": "Germany", "code": "DE"},
        {"name": "Ghana", "code": "GH"},
        {"name": "Gibraltar", "code": "GI"},
        {"name": "Greece", "code": "GR"},
        {"name": "Greenland", "code": "GL"},
        {"name": "Grenada", "code": "GD"},
        {"name": "Guadeloupe", "code": "GP"},
        {"name": "Guam", "code": "GU"},
        {"name": "Guatemala", "code": "GT"},
        {"name": "Guernsey", "code": "GG"},
        {"name": "Guinea", "code": "GN"},
        {"name": "Guinea-Bissau", "code": "GW"},
        {"name": "Guyana", "code": "GY"},
        {"name": "Haiti", "code": "HT"},
        {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
        {"name": "Holy See (Vatican City State)", "code": "VA"},
        {"name": "Honduras", "code": "HN"},
        {"name": "Hong Kong", "code": "HK"},
        {"name": "Hungary", "code": "HU"},
        {"name": "Iceland", "code": "IS"},
        {"name": "India", "code": "IN"},
        {"name": "Indonesia", "code": "ID"},
        {"name": "Iran", "code": "IR"},
        {"name": "Iraq", "code": "IQ"},
        {"name": "Ireland", "code": "IE"},
        {"name": "Isle of Man", "code": "IM"},
        {"name": "Israel", "code": "IL"},
        {"name": "Italy", "code": "IT"},
        {"name": "Jamaica", "code": "JM"},
        {"name": "Japan", "code": "JP"},
        {"name": "Jersey", "code": "JE"},
        {"name": "Jordan", "code": "JO"},
        {"name": "Kazakhstan", "code": "KZ"},
        {"name": "Kenya", "code": "KE"},
        {"name": "Kiribati", "code": "KI"},
        {"name": "Korea, Democratic People\"S Republic of", "code": "KP"},
        {"name": "South Korea", "code": "KR"},
        {"name": "Kuwait", "code": "KW"},
        {"name": "Kyrgyzstan", "code": "KG"},
        {"name": "Lao People\"S Democratic Republic", "code": "LA"},
        {"name": "Latvia", "code": "LV"},
        {"name": "Lebanon", "code": "LB"},
        {"name": "Lesotho", "code": "LS"},
        {"name": "Liberia", "code": "LR"},
        {"name": "Libya", "code": "LY"},
        {"name": "Liechtenstein", "code": "LI"},
        {"name": "Lithuania", "code": "LT"},
        {"name": "Luxembourg", "code": "LU"},
        {"name": "Macao", "code": "MO"},
        {"name": "Macedonia", "code": "MK"},
        {"name": "Madagascar", "code": "MG"},
        {"name": "Malawi", "code": "MW"},
        {"name": "Malaysia", "code": "MY"},
        {"name": "Maldives", "code": "MV"},
        {"name": "Mali", "code": "ML"},
        {"name": "Malta", "code": "MT"},
        {"name": "Marshall Islands", "code": "MH"},
        {"name": "Martinique", "code": "MQ"},
        {"name": "Mauritania", "code": "MR"},
        {"name": "Mauritius", "code": "MU"},
        {"name": "Mayotte", "code": "YT"},
        {"name": "Mexico", "code": "MX"},
        {"name": "Micronesia, Federated States of", "code": "FM"},
        {"name": "Moldova", "code": "MD"},
        {"name": "Monaco", "code": "MC"},
        {"name": "Mongolia", "code": "MN"},
        {"name": "Montenegro", "code": "ME"},
        {"name": "Montserrat", "code": "MS"},
        {"name": "Morocco", "code": "MA"},
        {"name": "Mozambique", "code": "MZ"},
        {"name": "Myanmar", "code": "MM"},
        {"name": "Namibia", "code": "NA"},
        {"name": "Nauru", "code": "NR"},
        {"name": "Nepal", "code": "NP"},
        {"name": "Netherlands", "code": "NL"},
        {"name": "Netherlands Antilles", "code": "AN"},
        {"name": "New Caledonia", "code": "NC"},
        {"name": "New Zealand", "code": "NZ"},
        {"name": "Nicaragua", "code": "NI"},
        {"name": "Niger", "code": "NE"},
        {"name": "Nigeria", "code": "NG"},
        {"name": "Niue", "code": "NU"},
        {"name": "Norfolk Island", "code": "NF"},
        {"name": "Northern Mariana Islands", "code": "MP"},
        {"name": "Norway", "code": "NO"},
        {"name": "Oman", "code": "OM"},
        {"name": "Pakistan", "code": "PK"},
        {"name": "Palau", "code": "PW"},
        {"name": "Palestinian Territory, Occupied", "code": "PS"},
        {"name": "Panama", "code": "PA"},
        {"name": "Papua New Guinea", "code": "PG"},
        {"name": "Paraguay", "code": "PY"},
        {"name": "Peru", "code": "PE"},
        {"name": "Philippines", "code": "PH"},
        {"name": "Pitcairn", "code": "PN"},
        {"name": "Poland", "code": "PL"},
        {"name": "Portugal", "code": "PT"},
        {"name": "Puerto Rico", "code": "PR"},
        {"name": "Qatar", "code": "QA"},
        {"name": "Reunion", "code": "RE"},
        {"name": "Romania", "code": "RO"},
        {"name": "Russia", "code": "RU"},
        {"name": "Rwanda", "code": "RW"},
        {"name": "Saint Helena", "code": "SH"},
        {"name": "Saint Kitts and Nevis", "code": "KN"},
        {"name": "Saint Lucia", "code": "LC"},
        {"name": "Saint Pierre and Miquelon", "code": "PM"},
        {"name": "Saint Vincent and the Grenadines", "code": "VC"},
        {"name": "Samoa", "code": "WS"},
        {"name": "San Marino", "code": "SM"},
        {"name": "Sao Tome and Principe", "code": "ST"},
        {"name": "Saudi Arabia", "code": "SA"},
        {"name": "Senegal", "code": "SN"},
        {"name": "Serbia", "code": "RS"},
        {"name": "Seychelles", "code": "SC"},
        {"name": "Sierra Leone", "code": "SL"},
        {"name": "Singapore", "code": "SG"},
        {"name": "Slovakia", "code": "SK"},
        {"name": "Slovenia", "code": "SI"},
        {"name": "Solomon Islands", "code": "SB"},
        {"name": "Somalia", "code": "SO"},
        {"name": "South Africa", "code": "ZA"},
        {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
        {"name": "Spain", "code": "ES"},
        {"name": "Sri Lanka", "code": "LK"},
        {"name": "Sudan", "code": "SD"},
        {"name": "Suriname", "code": "SR"},
        {"name": "Svalbard and Jan Mayen", "code": "SJ"},
        {"name": "Eswatini", "code": "SZ"},
        {"name": "Sweden", "code": "SE"},
        {"name": "Switzerland", "code": "CH"},
        {"name": "Syria", "code": "SY"},
        {"name": "Taiwan", "code": "TW"},
        {"name": "Tajikistan", "code": "TJ"},
        {"name": "Tanzania", "code": "TZ"},
        {"name": "Thailand", "code": "TH"},
        {"name": "Timor-Leste", "code": "TL"},
        {"name": "Togo", "code": "TG"},
        {"name": "Tokelau", "code": "TK"},
        {"name": "Tonga", "code": "TO"},
        {"name": "Trinidad and Tobago", "code": "TT"},
        {"name": "Tunisia", "code": "TN"},
        {"name": "Turkey", "code": "TR"},
        {"name": "Turkmenistan", "code": "TM"},
        {"name": "Turks and Caicos Islands", "code": "TC"},
        {"name": "Tuvalu", "code": "TV"},
        {"name": "Uganda", "code": "UG"},
        {"name": "Ukraine", "code": "UA"},
        {"name": "United Arab Emirates", "code": "AE"},
        {"name": "United Kingdom", "code": "GB"},
        {"name": "United States", "code": "US"},
        {"name": "United States Minor Outlying Islands", "code": "UM"},
        {"name": "Uruguay", "code": "UY"},
        {"name": "Uzbekistan", "code": "UZ"},
        {"name": "Vanuatu", "code": "VU"},
        {"name": "Venezuela", "code": "VE"},
        {"name": "Viet Nam", "code": "VN"},
        {"name": "Virgin Islands, British", "code": "VG"},
        {"name": "Virgin Islands, U.S.", "code": "VI"},
        {"name": "Wallis and Futuna", "code": "WF"},
        {"name": "Western Sahara", "code": "EH"},
        {"name": "Yemen", "code": "YE"},
        {"name": "Zambia", "code": "ZM"},
        {"name": "Zimbabwe", "code": "ZW"}
        ];

    const flagsWeAreUsing = [
      "ac.svg",
      "ad.svg",
      "ae.svg",
      "af.svg",
      "ag.svg",
      "ai.svg",
      "al.svg",
      "am.svg",
      "an.svg",
      "ao.svg",
      "aq.svg",
      "ar.svg",
      "as.svg",
      "at.svg",
      "au.svg",
      "aw.svg",
      "ax.svg",
      "az.svg",
      "ba.svg",
      "bb.svg",
      "bd.svg",
      "be.svg",
      "bf.svg",
      "bg.svg",
      "bh.svg",
      "bi.svg",
      "bj.svg",
      "bl.svg",
      "bm.svg",
      "bn.svg",
      "bo.svg",
      "bq.svg",
      "br.svg",
      "bs.svg",
      "bt.svg",
      "bv.svg",
      "bw.svg",
      "by.svg",
      "bz.svg",
      "ca.svg",
      "cc.svg",
      "cd.svg",
      "cf.svg",
      "cg.svg",
      "ch.svg",
      "ci.svg",
      "ck.svg",
      "cl.svg",
      "cm.svg",
      "cn.svg",
      "co.svg",
      "cp.svg",
      "cr.svg",
      "cu.svg",
      "cv.svg",
      "cw.svg",
      "cx.svg",
      "cy.svg",
      "cz.svg",
      "de.svg",
      "dg.svg",
      "dj.svg",
      "dk.svg",
      "dm.svg",
      "do.svg",
      "dz.svg",
      "ea.svg",
      "ec.svg",
      "ee.svg",
      "eg.svg",
      "eh.svg",
      "er.svg",
      "es.svg",
      "es-ct.svg",
      "es-ga.svg",
      "et.svg",
      "eu.svg",
      "fi.svg",
      "fj.svg",
      "fk.svg",
      "fm.svg",
      "fo.svg",
      "fr.svg",
      "ga.svg",
      "gb.svg",
      "gb-eng.svg",
      "gb-nir.svg",
      "gb-sct.svg",
      "gb-wls.svg",
      "gd.svg",
      "ge.svg",
      "gf.svg",
      "gg.svg",
      "gh.svg",
      "gi.svg",
      "gl.svg",
      "gm.svg",
      "gn.svg",
      "gp.svg",
      "gq.svg",
      "gr.svg",
      "gs.svg",
      "gt.svg",
      "gu.svg",
      "gw.svg",
      "gy.svg",
      "hk.svg",
      "hm.svg",
      "hn.svg",
      "hr.svg",
      "ht.svg",
      "hu.svg",
      "ic.svg",
      "id.svg",
      "ie.svg",
      "il.svg",
      "im.svg",
      "in.svg",
      "io.svg",
      "iq.svg",
      "ir.svg",
      "is.svg",
      "it.svg",
      "je.svg",
      "jm.svg",
      "jo.svg",
      "jp.svg",
      "ke.svg",
      "kg.svg",
      "kh.svg",
      "ki.svg",
      "km.svg",
      "kn.svg",
      "kp.svg",
      "kr.svg",
      "kw.svg",
      "ky.svg",
      "kz.svg",
      "la.svg",
      "lb.svg",
      "lc.svg",
      "li.svg",
      "lk.svg",
      "lr.svg",
      "ls.svg",
      "lt.svg",
      "lu.svg",
      "lv.svg",
      "ly.svg",
      "ma.svg",
      "mc.svg",
      "md.svg",
      "me.svg",
      "mf.svg",
      "mg.svg",
      "mh.svg",
      "mi.svg",
      "mk.svg",
      "ml.svg",
      "mm.svg",
      "mn.svg",
      "mo.svg",
      "mp.svg",
      "mq.svg",
      "mr.svg",
      "ms.svg",
      "mt.svg",
      "mu.svg",
      "mv.svg",
      "mw.svg",
      "mx.svg",
      "my.svg",
      "mz.svg",
      "na.svg",
      "nc.svg",
      "ne.svg",
      "nf.svg",
      "ng.svg",
      "ni.svg",
      "nl.svg",
      "no.svg",
      "np.svg",
      "nr.svg",
      "nu.svg",
      "nz.svg",
      "om.svg",
      "pa.svg",
      "pe.svg",
      "pf.svg",
      "pg.svg",
      "ph.svg",
      "pk.svg",
      "pl.svg",
      "pm.svg",
      "pn.svg",
      "pr.svg",
      "ps.svg",
      "pt.svg",
      "pw.svg",
      "py.svg",
      "qa.svg",
      "re.svg",
      "ro.svg",
      "rs.svg",
      "ru.svg",
      "rw.svg",
      "sa.svg",
      "sb.svg",
      "sc.svg",
      "sd.svg",
      "se.svg",
      "sg.svg",
      "sh.svg",
      "si.svg",
      "sj.svg",
      "sk.svg",
      "sl.svg",
      "sm.svg",
      "sn.svg",
      "so.svg",
      "sr.svg",
      "ss.svg",
      "st.svg",
      "sv.svg",
      "sx.svg",
      "sy.svg",
      "sz.svg",
      "ta.svg",
      "tc.svg",
      "td.svg",
      "tf.svg",
      "tg.svg",
      "th.svg",
      "tj.svg",
      "tk.svg",
      "tl.svg",
      "tm.svg",
      "tn.svg",
      "to.svg",
      "tr.svg",
      "tt.svg",
      "tv.svg",
      "tw.svg",
      "tz.svg",
      "ua.svg",
      "ug.svg",
      "um.svg",
      "un.svg",
      "us.svg",
      "uy.svg",
      "uz.svg",
      "va.svg",
      "vc.svg",
      "ve.svg",
      "vg.svg",
      "vi.svg",
      "vn.svg",
      "vu.svg",
      "wf.svg",
      "ws.svg",
      "xk.svg",
      "xx.svg",
      "ye.svg",
      "yt.svg",
      "za.svg",
      "zm.svg",
      "zw.svg"
    ];

    let notFoundFlag = [];
    let notFoundCode = [];

    function flagExists(url) {
      if(url){
        url = "/flags/" + url + ".svg";
        let req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status === 200 ? url : false;
      } else {
        return false;
      }
    }

    // Iterate the inputCurrencies json and try to find each country code by it's name from inputCountry_W_Name_Code
    Object.entries(inputCurrencies).forEach(([key, value]) => {
      if (inputCountry_W_Name_Code.find((e) => e.name === value.country)) {
        inputCurrencies[key].countryCode = inputCountry_W_Name_Code.find((e) => e.name === value.country).code;
      }else{ // if not append that country/currency to the notFoundCode array
        notFoundCode = [...notFoundCode, value];
      }
    });

    Object.entries(inputCurrencies).forEach(([key, value]) => {
      // check if that country code is in the flags json
      if ( flagExists (value.countryCode.toLowerCase() ) ) {
        let flag = flagExists(  value.countryCode.toLowerCase()  );
        inputCurrencies[key].flag = flag;
        let flag_img = document.createElement("img");
        flag_img.src = flag;
        flag_img.alt = value.country;

        document.getElementById("flags").appendChild(flag_img)
      } else { // if not append that country/currency to the notFoundFlag array
        notFoundFlag = [...notFoundFlag, value];
      }
    });

    // Just to pretty print the result

    document.getElementById("data").innerHTML = "<span style='background-color: green;'>Created "+ inputCurrencies.length +"<br>We've not found " + notFoundCode.length + "<br><br><br></span>" + JSON.stringify(
        inputCurrencies,
        null,
        4
    );


    // output all the misfounded country/currencies flags
    document.getElementById("notFound").innerHTML = "<span style='background-color: red;'> Not Found <br><br><br>"+ notFoundFlag.length +"</span>" + JSON.stringify(
      notFoundFlag,
      null,
      4
    );

