const pref = [
  {
    label: 'United States',
    value: 'USA',
  },
  {
    label: 'Japan',
    value: 'JPN',
  },
  {
    label: 'Germany',
    value: 'DEU',
  },
];

const rest = [
  {
    label: 'Afghanistan',
    value: 'AFG',
  },
  {
    label: 'Åland Islands',
    value: 'ALA',
  },
  {
    label: 'Albania',
    value: 'ALB',
  },
  {
    label: 'Algeria',
    value: 'DZA',
  },
  {
    label: 'American Samoa',
    value: 'ASM',
  },
  {
    label: 'Andorra',
    value: 'AND',
  },
  {
    label: 'Angola',
    value: 'AGO',
  },
  {
    label: 'Anguilla',
    value: 'AIA',
  },
  {
    label: 'Antarctica',
    value: 'ATA',
  },
  {
    label: 'Antigua and Barbuda',
    value: 'ATG',
  },
  {
    label: 'Argentina',
    value: 'ARG',
  },
  {
    label: 'Armenia',
    value: 'ARM',
  },
  {
    label: 'Aruba',
    value: 'ABW',
  },
  {
    label: 'Australia',
    value: 'AUS',
  },
  {
    label: 'Austria',
    value: 'AUT',
  },
  {
    label: 'Azerbaijan',
    value: 'AZE',
  },
  {
    label: 'Bahamas',
    value: 'BHS',
  },
  {
    label: 'Bahrain',
    value: 'BHR',
  },
  {
    label: 'Bangladesh',
    value: 'BGD',
  },
  {
    label: 'Barbados',
    value: 'BRB',
  },
  {
    label: 'Belarus',
    value: 'BLR',
  },
  {
    label: 'Belgium',
    value: 'BEL',
  },
  {
    label: 'Belize',
    value: 'BLZ',
  },
  {
    label: 'Benin',
    value: 'BEN',
  },
  {
    label: 'Bermuda',
    value: 'BMU',
  },
  {
    label: 'Bhutan',
    value: 'BTN',
  },
  {
    label: 'Bolivia',
    value: 'BOL',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'BIH',
  },
  {
    label: 'Botswana',
    value: 'BWA',
  },
  {
    label: 'Bouvet Island',
    value: 'BVT',
  },
  {
    label: 'Brazil',
    value: 'BRA',
  },
  {
    label: 'British Indian Ocean Territory',
    value: 'IOT',
  },
  {
    label: 'British Virgin Islands',
    value: 'VGB',
  },
  {
    label: 'Brunei',
    value: 'BRN',
  },
  {
    label: 'Bulgaria',
    value: 'BGR',
  },
  {
    label: 'Burkina Faso',
    value: 'BFA',
  },
  {
    label: 'Burundi',
    value: 'BDI',
  },
  {
    label: 'Cambodia',
    value: 'KHM',
  },
  {
    label: 'Cameroon',
    value: 'CMR',
  },
  {
    label: 'Canada',
    value: 'CAN',
  },
  {
    label: 'Cape Verde',
    value: 'CPV',
  },
  {
    label: 'Caribbean Netherlands',
    value: 'BES',
  },
  {
    label: 'Cayman Islands',
    value: 'CYM',
  },
  {
    label: 'Central African Republic',
    value: 'CAF',
  },
  {
    label: 'Chad',
    value: 'TCD',
  },
  {
    label: 'Chile',
    value: 'CHL',
  },
  {
    label: 'China',
    value: 'CHN',
  },
  {
    label: 'Christmas Island',
    value: 'CXR',
  },
  {
    label: 'Cocos (Keeling) Islands',
    value: 'CCK',
  },
  {
    label: 'Colombia',
    value: 'COL',
  },
  {
    label: 'Comoros',
    value: 'COM',
  },
  {
    label: 'Cook Islands',
    value: 'COK',
  },
  {
    label: 'Costa Rica',
    value: 'CRI',
  },
  {
    label: 'Croatia',
    value: 'HRV',
  },
  {
    label: 'Cuba',
    value: 'CUB',
  },
  {
    label: 'Curaçao',
    value: 'CUW',
  },
  {
    label: 'Cyprus',
    value: 'CYP',
  },
  {
    label: 'Czechia',
    value: 'CZE',
  },
  {
    label: 'DR Congo',
    value: 'COD',
  },
  {
    label: 'Denmark',
    value: 'DNK',
  },
  {
    label: 'Djibouti',
    value: 'DJI',
  },
  {
    label: 'Dominica',
    value: 'DMA',
  },
  {
    label: 'Dominican Republic',
    value: 'DOM',
  },
  {
    label: 'Ecuador',
    value: 'ECU',
  },
  {
    label: 'Egypt',
    value: 'EGY',
  },
  {
    label: 'El Salvador',
    value: 'SLV',
  },
  {
    label: 'Equatorial Guinea',
    value: 'GNQ',
  },
  {
    label: 'Eritrea',
    value: 'ERI',
  },
  {
    label: 'Estonia',
    value: 'EST',
  },
  {
    label: 'Eswatini',
    value: 'SWZ',
  },
  {
    label: 'Ethiopia',
    value: 'ETH',
  },
  {
    label: 'Falkland Islands',
    value: 'FLK',
  },
  {
    label: 'Faroe Islands',
    value: 'FRO',
  },
  {
    label: 'Fiji',
    value: 'FJI',
  },
  {
    label: 'Finland',
    value: 'FIN',
  },
  {
    label: 'France',
    value: 'FRA',
  },
  {
    label: 'French Guiana',
    value: 'GUF',
  },
  {
    label: 'French Polynesia',
    value: 'PYF',
  },
  {
    label: 'French Southern and Antarctic Lands',
    value: 'ATF',
  },
  {
    label: 'Gabon',
    value: 'GAB',
  },
  {
    label: 'Gambia',
    value: 'GMB',
  },
  {
    label: 'Georgia',
    value: 'GEO',
  },
  {
    label: 'Ghana',
    value: 'GHA',
  },
  {
    label: 'Gibraltar',
    value: 'GIB',
  },
  {
    label: 'Greece',
    value: 'GRC',
  },
  {
    label: 'Greenland',
    value: 'GRL',
  },
  {
    label: 'Grenada',
    value: 'GRD',
  },
  {
    label: 'Guadeloupe',
    value: 'GLP',
  },
  {
    label: 'Guam',
    value: 'GUM',
  },
  {
    label: 'Guatemala',
    value: 'GTM',
  },
  {
    label: 'Guernsey',
    value: 'GGY',
  },
  {
    label: 'Guinea',
    value: 'GIN',
  },
  {
    label: 'Guinea-Bissau',
    value: 'GNB',
  },
  {
    label: 'Guyana',
    value: 'GUY',
  },
  {
    label: 'Haiti',
    value: 'HTI',
  },
  {
    label: 'Heard Island and McDonald Islands',
    value: 'HMD',
  },
  {
    label: 'Honduras',
    value: 'HND',
  },
  {
    label: 'Hong Kong',
    value: 'HKG',
  },
  {
    label: 'Hungary',
    value: 'HUN',
  },
  {
    label: 'Iceland',
    value: 'ISL',
  },
  {
    label: 'India',
    value: 'IND',
  },
  {
    label: 'Indonesia',
    value: 'IDN',
  },
  {
    label: 'Iran',
    value: 'IRN',
  },
  {
    label: 'Iraq',
    value: 'IRQ',
  },
  {
    label: 'Ireland',
    value: 'IRL',
  },
  {
    label: 'Isle of Man',
    value: 'IMN',
  },
  {
    label: 'Israel',
    value: 'ISR',
  },
  {
    label: 'Italy',
    value: 'ITA',
  },
  {
    label: 'Ivory Coast',
    value: 'CIV',
  },
  {
    label: 'Jamaica',
    value: 'JAM',
  },
  {
    label: 'Jersey',
    value: 'JEY',
  },
  {
    label: 'Jordan',
    value: 'JOR',
  },
  {
    label: 'Kazakhstan',
    value: 'KAZ',
  },
  {
    label: 'Kenya',
    value: 'KEN',
  },
  {
    label: 'Kiribati',
    value: 'KIR',
  },
  {
    label: 'Kosovo',
    value: 'UNK',
  },
  {
    label: 'Kuwait',
    value: 'KWT',
  },
  {
    label: 'Kyrgyzstan',
    value: 'KGZ',
  },
  {
    label: 'Laos',
    value: 'LAO',
  },
  {
    label: 'Latvia',
    value: 'LVA',
  },
  {
    label: 'Lebanon',
    value: 'LBN',
  },
  {
    label: 'Lesotho',
    value: 'LSO',
  },
  {
    label: 'Liberia',
    value: 'LBR',
  },
  {
    label: 'Libya',
    value: 'LBY',
  },
  {
    label: 'Liechtenstein',
    value: 'LIE',
  },
  {
    label: 'Lithuania',
    value: 'LTU',
  },
  {
    label: 'Luxembourg',
    value: 'LUX',
  },
  {
    label: 'Macau',
    value: 'MAC',
  },
  {
    label: 'Madagascar',
    value: 'MDG',
  },
  {
    label: 'Malawi',
    value: 'MWI',
  },
  {
    label: 'Malaysia',
    value: 'MYS',
  },
  {
    label: 'Maldives',
    value: 'MDV',
  },
  {
    label: 'Mali',
    value: 'MLI',
  },
  {
    label: 'Malta',
    value: 'MLT',
  },
  {
    label: 'Marshall Islands',
    value: 'MHL',
  },
  {
    label: 'Martinique',
    value: 'MTQ',
  },
  {
    label: 'Mauritania',
    value: 'MRT',
  },
  {
    label: 'Mauritius',
    value: 'MUS',
  },
  {
    label: 'Mayotte',
    value: 'MYT',
  },
  {
    label: 'Mexico',
    value: 'MEX',
  },
  {
    label: 'Micronesia',
    value: 'FSM',
  },
  {
    label: 'Moldova',
    value: 'MDA',
  },
  {
    label: 'Monaco',
    value: 'MCO',
  },
  {
    label: 'Mongolia',
    value: 'MNG',
  },
  {
    label: 'Montenegro',
    value: 'MNE',
  },
  {
    label: 'Montserrat',
    value: 'MSR',
  },
  {
    label: 'Morocco',
    value: 'MAR',
  },
  {
    label: 'Mozambique',
    value: 'MOZ',
  },
  {
    label: 'Myanmar',
    value: 'MMR',
  },
  {
    label: 'Namibia',
    value: 'NAM',
  },
  {
    label: 'Nauru',
    value: 'NRU',
  },
  {
    label: 'Nepal',
    value: 'NPL',
  },
  {
    label: 'Netherlands',
    value: 'NLD',
  },
  {
    label: 'New Caledonia',
    value: 'NCL',
  },
  {
    label: 'New Zealand',
    value: 'NZL',
  },
  {
    label: 'Nicaragua',
    value: 'NIC',
  },
  {
    label: 'Niger',
    value: 'NER',
  },
  {
    label: 'Nigeria',
    value: 'NGA',
  },
  {
    label: 'Niue',
    value: 'NIU',
  },
  {
    label: 'Norfolk Island',
    value: 'NFK',
  },
  {
    label: 'North Korea',
    value: 'PRK',
  },
  {
    label: 'North Macedonia',
    value: 'MKD',
  },
  {
    label: 'Northern Mariana Islands',
    value: 'MNP',
  },
  {
    label: 'Norway',
    value: 'NOR',
  },
  {
    label: 'Oman',
    value: 'OMN',
  },
  {
    label: 'Pakistan',
    value: 'PAK',
  },
  {
    label: 'Palau',
    value: 'PLW',
  },
  {
    label: 'Palestine',
    value: 'PSE',
  },
  {
    label: 'Panama',
    value: 'PAN',
  },
  {
    label: 'Papua New Guinea',
    value: 'PNG',
  },
  {
    label: 'Paraguay',
    value: 'PRY',
  },
  {
    label: 'Peru',
    value: 'PER',
  },
  {
    label: 'Philippines',
    value: 'PHL',
  },
  {
    label: 'Pitcairn Islands',
    value: 'PCN',
  },
  {
    label: 'Poland',
    value: 'POL',
  },
  {
    label: 'Portugal',
    value: 'PRT',
  },
  {
    label: 'Puerto Rico',
    value: 'PRI',
  },
  {
    label: 'Qatar',
    value: 'QAT',
  },
  {
    label: 'Republic of the Congo',
    value: 'COG',
  },
  {
    label: 'Romania',
    value: 'ROU',
  },
  {
    label: 'Russia',
    value: 'RUS',
  },
  {
    label: 'Rwanda',
    value: 'RWA',
  },
  {
    label: 'Réunion',
    value: 'REU',
  },
  {
    label: 'Saint Barthélemy',
    value: 'BLM',
  },
  {
    label: 'Saint Helena, Ascension and Tristan da Cunha',
    value: 'SHN',
  },
  {
    label: 'Saint Kitts and Nevis',
    value: 'KNA',
  },
  {
    label: 'Saint Lucia',
    value: 'LCA',
  },
  {
    label: 'Saint Martin',
    value: 'MAF',
  },
  {
    label: 'Saint Pierre and Miquelon',
    value: 'SPM',
  },
  {
    label: 'Saint Vincent and the Grenadines',
    value: 'VCT',
  },
  {
    label: 'Samoa',
    value: 'WSM',
  },
  {
    label: 'San Marino',
    value: 'SMR',
  },
  {
    label: 'Saudi Arabia',
    value: 'SAU',
  },
  {
    label: 'Senegal',
    value: 'SEN',
  },
  {
    label: 'Serbia',
    value: 'SRB',
  },
  {
    label: 'Seychelles',
    value: 'SYC',
  },
  {
    label: 'Sierra Leone',
    value: 'SLE',
  },
  {
    label: 'Singapore',
    value: 'SGP',
  },
  {
    label: 'Sint Maarten',
    value: 'SXM',
  },
  {
    label: 'Slovakia',
    value: 'SVK',
  },
  {
    label: 'Slovenia',
    value: 'SVN',
  },
  {
    label: 'Solomon Islands',
    value: 'SLB',
  },
  {
    label: 'Somalia',
    value: 'SOM',
  },
  {
    label: 'South Africa',
    value: 'ZAF',
  },
  {
    label: 'South Georgia',
    value: 'SGS',
  },
  {
    label: 'South Korea',
    value: 'KOR',
  },
  {
    label: 'South Sudan',
    value: 'SSD',
  },
  {
    label: 'Spain',
    value: 'ESP',
  },
  {
    label: 'Sri Lanka',
    value: 'LKA',
  },
  {
    label: 'Sudan',
    value: 'SDN',
  },
  {
    label: 'Suriname',
    value: 'SUR',
  },
  {
    label: 'Svalbard and Jan Mayen',
    value: 'SJM',
  },
  {
    label: 'Sweden',
    value: 'SWE',
  },
  {
    label: 'Switzerland',
    value: 'CHE',
  },
  {
    label: 'Syria',
    value: 'SYR',
  },
  {
    label: 'São Tomé and Príncipe',
    value: 'STP',
  },
  {
    label: 'Taiwan',
    value: 'TWN',
  },
  {
    label: 'Tajikistan',
    value: 'TJK',
  },
  {
    label: 'Tanzania',
    value: 'TZA',
  },
  {
    label: 'Thailand',
    value: 'THA',
  },
  {
    label: 'Timor-Leste',
    value: 'TLS',
  },
  {
    label: 'Togo',
    value: 'TGO',
  },
  {
    label: 'Tokelau',
    value: 'TKL',
  },
  {
    label: 'Tonga',
    value: 'TON',
  },
  {
    label: 'Trinidad and Tobago',
    value: 'TTO',
  },
  {
    label: 'Tunisia',
    value: 'TUN',
  },
  {
    label: 'Turkey',
    value: 'TUR',
  },
  {
    label: 'Turkmenistan',
    value: 'TKM',
  },
  {
    label: 'Turks and Caicos Islands',
    value: 'TCA',
  },
  {
    label: 'Tuvalu',
    value: 'TUV',
  },
  {
    label: 'Uganda',
    value: 'UGA',
  },
  {
    label: 'Ukraine',
    value: 'UKR',
  },
  {
    label: 'United Arab Emirates',
    value: 'ARE',
  },
  {
    label: 'United Kingdom',
    value: 'GBR',
  },
  {
    label: 'United States Minor Outlying Islands',
    value: 'UMI',
  },
  {
    label: 'United States Virgin Islands',
    value: 'VIR',
  },
  {
    label: 'Uruguay',
    value: 'URY',
  },
  {
    label: 'Uzbekistan',
    value: 'UZB',
  },
  {
    label: 'Vanuatu',
    value: 'VUT',
  },
  {
    label: 'Vatican City',
    value: 'VAT',
  },
  {
    label: 'Venezuela',
    value: 'VEN',
  },
  {
    label: 'Vietnam',
    value: 'VNM',
  },
  {
    label: 'Wallis and Futuna',
    value: 'WLF',
  },
  {
    label: 'Western Sahara',
    value: 'ESH',
  },
  {
    label: 'Yemen',
    value: 'YEM',
  },
  {
    label: 'Zambia',
    value: 'ZMB',
  },
  {
    label: 'Zimbabwe',
    value: 'ZWE',
  },
];

export default [...pref, ...rest];
