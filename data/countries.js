const pref = [
  {
    name: 'United States',
    value: 'USA',
  },
  {
    name: 'Japan',
    value: 'JPN',
  },
  {
    name: 'Germany',
    value: 'DEU',
  },
];

const rest = [
  {
    name: 'Afghanistan',
    value: 'AFG',
  },
  {
    name: 'Åland Islands',
    value: 'ALA',
  },
  {
    name: 'Albania',
    value: 'ALB',
  },
  {
    name: 'Algeria',
    value: 'DZA',
  },
  {
    name: 'American Samoa',
    value: 'ASM',
  },
  {
    name: 'Andorra',
    value: 'AND',
  },
  {
    name: 'Angola',
    value: 'AGO',
  },
  {
    name: 'Anguilla',
    value: 'AIA',
  },
  {
    name: 'Antarctica',
    value: 'ATA',
  },
  {
    name: 'Antigua and Barbuda',
    value: 'ATG',
  },
  {
    name: 'Argentina',
    value: 'ARG',
  },
  {
    name: 'Armenia',
    value: 'ARM',
  },
  {
    name: 'Aruba',
    value: 'ABW',
  },
  {
    name: 'Australia',
    value: 'AUS',
  },
  {
    name: 'Austria',
    value: 'AUT',
  },
  {
    name: 'Azerbaijan',
    value: 'AZE',
  },
  {
    name: 'Bahamas',
    value: 'BHS',
  },
  {
    name: 'Bahrain',
    value: 'BHR',
  },
  {
    name: 'Bangladesh',
    value: 'BGD',
  },
  {
    name: 'Barbados',
    value: 'BRB',
  },
  {
    name: 'Belarus',
    value: 'BLR',
  },
  {
    name: 'Belgium',
    value: 'BEL',
  },
  {
    name: 'Belize',
    value: 'BLZ',
  },
  {
    name: 'Benin',
    value: 'BEN',
  },
  {
    name: 'Bermuda',
    value: 'BMU',
  },
  {
    name: 'Bhutan',
    value: 'BTN',
  },
  {
    name: 'Bolivia',
    value: 'BOL',
  },
  {
    name: 'Bosnia and Herzegovina',
    value: 'BIH',
  },
  {
    name: 'Botswana',
    value: 'BWA',
  },
  {
    name: 'Bouvet Island',
    value: 'BVT',
  },
  {
    name: 'Brazil',
    value: 'BRA',
  },
  {
    name: 'British Indian Ocean Territory',
    value: 'IOT',
  },
  {
    name: 'British Virgin Islands',
    value: 'VGB',
  },
  {
    name: 'Brunei',
    value: 'BRN',
  },
  {
    name: 'Bulgaria',
    value: 'BGR',
  },
  {
    name: 'Burkina Faso',
    value: 'BFA',
  },
  {
    name: 'Burundi',
    value: 'BDI',
  },
  {
    name: 'Cambodia',
    value: 'KHM',
  },
  {
    name: 'Cameroon',
    value: 'CMR',
  },
  {
    name: 'Canada',
    value: 'CAN',
  },
  {
    name: 'Cape Verde',
    value: 'CPV',
  },
  {
    name: 'Caribbean Netherlands',
    value: 'BES',
  },
  {
    name: 'Cayman Islands',
    value: 'CYM',
  },
  {
    name: 'Central African Republic',
    value: 'CAF',
  },
  {
    name: 'Chad',
    value: 'TCD',
  },
  {
    name: 'Chile',
    value: 'CHL',
  },
  {
    name: 'China',
    value: 'CHN',
  },
  {
    name: 'Christmas Island',
    value: 'CXR',
  },
  {
    name: 'Cocos (Keeling) Islands',
    value: 'CCK',
  },
  {
    name: 'Colombia',
    value: 'COL',
  },
  {
    name: 'Comoros',
    value: 'COM',
  },
  {
    name: 'Cook Islands',
    value: 'COK',
  },
  {
    name: 'Costa Rica',
    value: 'CRI',
  },
  {
    name: 'Croatia',
    value: 'HRV',
  },
  {
    name: 'Cuba',
    value: 'CUB',
  },
  {
    name: 'Curaçao',
    value: 'CUW',
  },
  {
    name: 'Cyprus',
    value: 'CYP',
  },
  {
    name: 'Czechia',
    value: 'CZE',
  },
  {
    name: 'DR Congo',
    value: 'COD',
  },
  {
    name: 'Denmark',
    value: 'DNK',
  },
  {
    name: 'Djibouti',
    value: 'DJI',
  },
  {
    name: 'Dominica',
    value: 'DMA',
  },
  {
    name: 'Dominican Republic',
    value: 'DOM',
  },
  {
    name: 'Ecuador',
    value: 'ECU',
  },
  {
    name: 'Egypt',
    value: 'EGY',
  },
  {
    name: 'El Salvador',
    value: 'SLV',
  },
  {
    name: 'Equatorial Guinea',
    value: 'GNQ',
  },
  {
    name: 'Eritrea',
    value: 'ERI',
  },
  {
    name: 'Estonia',
    value: 'EST',
  },
  {
    name: 'Eswatini',
    value: 'SWZ',
  },
  {
    name: 'Ethiopia',
    value: 'ETH',
  },
  {
    name: 'Falkland Islands',
    value: 'FLK',
  },
  {
    name: 'Faroe Islands',
    value: 'FRO',
  },
  {
    name: 'Fiji',
    value: 'FJI',
  },
  {
    name: 'Finland',
    value: 'FIN',
  },
  {
    name: 'France',
    value: 'FRA',
  },
  {
    name: 'French Guiana',
    value: 'GUF',
  },
  {
    name: 'French Polynesia',
    value: 'PYF',
  },
  {
    name: 'French Southern and Antarctic Lands',
    value: 'ATF',
  },
  {
    name: 'Gabon',
    value: 'GAB',
  },
  {
    name: 'Gambia',
    value: 'GMB',
  },
  {
    name: 'Georgia',
    value: 'GEO',
  },
  {
    name: 'Ghana',
    value: 'GHA',
  },
  {
    name: 'Gibraltar',
    value: 'GIB',
  },
  {
    name: 'Greece',
    value: 'GRC',
  },
  {
    name: 'Greenland',
    value: 'GRL',
  },
  {
    name: 'Grenada',
    value: 'GRD',
  },
  {
    name: 'Guadeloupe',
    value: 'GLP',
  },
  {
    name: 'Guam',
    value: 'GUM',
  },
  {
    name: 'Guatemala',
    value: 'GTM',
  },
  {
    name: 'Guernsey',
    value: 'GGY',
  },
  {
    name: 'Guinea',
    value: 'GIN',
  },
  {
    name: 'Guinea-Bissau',
    value: 'GNB',
  },
  {
    name: 'Guyana',
    value: 'GUY',
  },
  {
    name: 'Haiti',
    value: 'HTI',
  },
  {
    name: 'Heard Island and McDonald Islands',
    value: 'HMD',
  },
  {
    name: 'Honduras',
    value: 'HND',
  },
  {
    name: 'Hong Kong',
    value: 'HKG',
  },
  {
    name: 'Hungary',
    value: 'HUN',
  },
  {
    name: 'Iceland',
    value: 'ISL',
  },
  {
    name: 'India',
    value: 'IND',
  },
  {
    name: 'Indonesia',
    value: 'IDN',
  },
  {
    name: 'Iran',
    value: 'IRN',
  },
  {
    name: 'Iraq',
    value: 'IRQ',
  },
  {
    name: 'Ireland',
    value: 'IRL',
  },
  {
    name: 'Isle of Man',
    value: 'IMN',
  },
  {
    name: 'Israel',
    value: 'ISR',
  },
  {
    name: 'Italy',
    value: 'ITA',
  },
  {
    name: 'Ivory Coast',
    value: 'CIV',
  },
  {
    name: 'Jamaica',
    value: 'JAM',
  },
  {
    name: 'Jersey',
    value: 'JEY',
  },
  {
    name: 'Jordan',
    value: 'JOR',
  },
  {
    name: 'Kazakhstan',
    value: 'KAZ',
  },
  {
    name: 'Kenya',
    value: 'KEN',
  },
  {
    name: 'Kiribati',
    value: 'KIR',
  },
  {
    name: 'Kosovo',
    value: 'UNK',
  },
  {
    name: 'Kuwait',
    value: 'KWT',
  },
  {
    name: 'Kyrgyzstan',
    value: 'KGZ',
  },
  {
    name: 'Laos',
    value: 'LAO',
  },
  {
    name: 'Latvia',
    value: 'LVA',
  },
  {
    name: 'Lebanon',
    value: 'LBN',
  },
  {
    name: 'Lesotho',
    value: 'LSO',
  },
  {
    name: 'Liberia',
    value: 'LBR',
  },
  {
    name: 'Libya',
    value: 'LBY',
  },
  {
    name: 'Liechtenstein',
    value: 'LIE',
  },
  {
    name: 'Lithuania',
    value: 'LTU',
  },
  {
    name: 'Luxembourg',
    value: 'LUX',
  },
  {
    name: 'Macau',
    value: 'MAC',
  },
  {
    name: 'Madagascar',
    value: 'MDG',
  },
  {
    name: 'Malawi',
    value: 'MWI',
  },
  {
    name: 'Malaysia',
    value: 'MYS',
  },
  {
    name: 'Maldives',
    value: 'MDV',
  },
  {
    name: 'Mali',
    value: 'MLI',
  },
  {
    name: 'Malta',
    value: 'MLT',
  },
  {
    name: 'Marshall Islands',
    value: 'MHL',
  },
  {
    name: 'Martinique',
    value: 'MTQ',
  },
  {
    name: 'Mauritania',
    value: 'MRT',
  },
  {
    name: 'Mauritius',
    value: 'MUS',
  },
  {
    name: 'Mayotte',
    value: 'MYT',
  },
  {
    name: 'Mexico',
    value: 'MEX',
  },
  {
    name: 'Micronesia',
    value: 'FSM',
  },
  {
    name: 'Moldova',
    value: 'MDA',
  },
  {
    name: 'Monaco',
    value: 'MCO',
  },
  {
    name: 'Mongolia',
    value: 'MNG',
  },
  {
    name: 'Montenegro',
    value: 'MNE',
  },
  {
    name: 'Montserrat',
    value: 'MSR',
  },
  {
    name: 'Morocco',
    value: 'MAR',
  },
  {
    name: 'Mozambique',
    value: 'MOZ',
  },
  {
    name: 'Myanmar',
    value: 'MMR',
  },
  {
    name: 'Namibia',
    value: 'NAM',
  },
  {
    name: 'Nauru',
    value: 'NRU',
  },
  {
    name: 'Nepal',
    value: 'NPL',
  },
  {
    name: 'Netherlands',
    value: 'NLD',
  },
  {
    name: 'New Caledonia',
    value: 'NCL',
  },
  {
    name: 'New Zealand',
    value: 'NZL',
  },
  {
    name: 'Nicaragua',
    value: 'NIC',
  },
  {
    name: 'Niger',
    value: 'NER',
  },
  {
    name: 'Nigeria',
    value: 'NGA',
  },
  {
    name: 'Niue',
    value: 'NIU',
  },
  {
    name: 'Norfolk Island',
    value: 'NFK',
  },
  {
    name: 'North Korea',
    value: 'PRK',
  },
  {
    name: 'North Macedonia',
    value: 'MKD',
  },
  {
    name: 'Northern Mariana Islands',
    value: 'MNP',
  },
  {
    name: 'Norway',
    value: 'NOR',
  },
  {
    name: 'Oman',
    value: 'OMN',
  },
  {
    name: 'Pakistan',
    value: 'PAK',
  },
  {
    name: 'Palau',
    value: 'PLW',
  },
  {
    name: 'Palestine',
    value: 'PSE',
  },
  {
    name: 'Panama',
    value: 'PAN',
  },
  {
    name: 'Papua New Guinea',
    value: 'PNG',
  },
  {
    name: 'Paraguay',
    value: 'PRY',
  },
  {
    name: 'Peru',
    value: 'PER',
  },
  {
    name: 'Philippines',
    value: 'PHL',
  },
  {
    name: 'Pitcairn Islands',
    value: 'PCN',
  },
  {
    name: 'Poland',
    value: 'POL',
  },
  {
    name: 'Portugal',
    value: 'PRT',
  },
  {
    name: 'Puerto Rico',
    value: 'PRI',
  },
  {
    name: 'Qatar',
    value: 'QAT',
  },
  {
    name: 'Republic of the Congo',
    value: 'COG',
  },
  {
    name: 'Romania',
    value: 'ROU',
  },
  {
    name: 'Russia',
    value: 'RUS',
  },
  {
    name: 'Rwanda',
    value: 'RWA',
  },
  {
    name: 'Réunion',
    value: 'REU',
  },
  {
    name: 'Saint Barthélemy',
    value: 'BLM',
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    value: 'SHN',
  },
  {
    name: 'Saint Kitts and Nevis',
    value: 'KNA',
  },
  {
    name: 'Saint Lucia',
    value: 'LCA',
  },
  {
    name: 'Saint Martin',
    value: 'MAF',
  },
  {
    name: 'Saint Pierre and Miquelon',
    value: 'SPM',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    value: 'VCT',
  },
  {
    name: 'Samoa',
    value: 'WSM',
  },
  {
    name: 'San Marino',
    value: 'SMR',
  },
  {
    name: 'Saudi Arabia',
    value: 'SAU',
  },
  {
    name: 'Senegal',
    value: 'SEN',
  },
  {
    name: 'Serbia',
    value: 'SRB',
  },
  {
    name: 'Seychelles',
    value: 'SYC',
  },
  {
    name: 'Sierra Leone',
    value: 'SLE',
  },
  {
    name: 'Singapore',
    value: 'SGP',
  },
  {
    name: 'Sint Maarten',
    value: 'SXM',
  },
  {
    name: 'Slovakia',
    value: 'SVK',
  },
  {
    name: 'Slovenia',
    value: 'SVN',
  },
  {
    name: 'Solomon Islands',
    value: 'SLB',
  },
  {
    name: 'Somalia',
    value: 'SOM',
  },
  {
    name: 'South Africa',
    value: 'ZAF',
  },
  {
    name: 'South Georgia',
    value: 'SGS',
  },
  {
    name: 'South Korea',
    value: 'KOR',
  },
  {
    name: 'South Sudan',
    value: 'SSD',
  },
  {
    name: 'Spain',
    value: 'ESP',
  },
  {
    name: 'Sri Lanka',
    value: 'LKA',
  },
  {
    name: 'Sudan',
    value: 'SDN',
  },
  {
    name: 'Suriname',
    value: 'SUR',
  },
  {
    name: 'Svalbard and Jan Mayen',
    value: 'SJM',
  },
  {
    name: 'Sweden',
    value: 'SWE',
  },
  {
    name: 'Switzerland',
    value: 'CHE',
  },
  {
    name: 'Syria',
    value: 'SYR',
  },
  {
    name: 'São Tomé and Príncipe',
    value: 'STP',
  },
  {
    name: 'Taiwan',
    value: 'TWN',
  },
  {
    name: 'Tajikistan',
    value: 'TJK',
  },
  {
    name: 'Tanzania',
    value: 'TZA',
  },
  {
    name: 'Thailand',
    value: 'THA',
  },
  {
    name: 'Timor-Leste',
    value: 'TLS',
  },
  {
    name: 'Togo',
    value: 'TGO',
  },
  {
    name: 'Tokelau',
    value: 'TKL',
  },
  {
    name: 'Tonga',
    value: 'TON',
  },
  {
    name: 'Trinidad and Tobago',
    value: 'TTO',
  },
  {
    name: 'Tunisia',
    value: 'TUN',
  },
  {
    name: 'Turkey',
    value: 'TUR',
  },
  {
    name: 'Turkmenistan',
    value: 'TKM',
  },
  {
    name: 'Turks and Caicos Islands',
    value: 'TCA',
  },
  {
    name: 'Tuvalu',
    value: 'TUV',
  },
  {
    name: 'Uganda',
    value: 'UGA',
  },
  {
    name: 'Ukraine',
    value: 'UKR',
  },
  {
    name: 'United Arab Emirates',
    value: 'ARE',
  },
  {
    name: 'United Kingdom',
    value: 'GBR',
  },
  {
    name: 'United States Minor Outlying Islands',
    value: 'UMI',
  },
  {
    name: 'United States Virgin Islands',
    value: 'VIR',
  },
  {
    name: 'Uruguay',
    value: 'URY',
  },
  {
    name: 'Uzbekistan',
    value: 'UZB',
  },
  {
    name: 'Vanuatu',
    value: 'VUT',
  },
  {
    name: 'Vatican City',
    value: 'VAT',
  },
  {
    name: 'Venezuela',
    value: 'VEN',
  },
  {
    name: 'Vietnam',
    value: 'VNM',
  },
  {
    name: 'Wallis and Futuna',
    value: 'WLF',
  },
  {
    name: 'Western Sahara',
    value: 'ESH',
  },
  {
    name: 'Yemen',
    value: 'YEM',
  },
  {
    name: 'Zambia',
    value: 'ZMB',
  },
  {
    name: 'Zimbabwe',
    value: 'ZWE',
  },
];

export default [...pref, ...rest];
