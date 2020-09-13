export default {
  annotationData: {},
  formData: {
    queryFields: { groupby: 'groupby', metrics: 'metrics' },
    datasource: '26__table',
    vizType: 'dynamic_bar',
    sliceId: 497,
    urlParams: {},
    timeRangeEndpoints: ['inclusive', 'exclusive'],
    timeRange: 'Last week',
    groupby: ['due_to_group', 'period'],
    metrics: [
      {
        aggregate: 'SUM',
        column: {
          column_name: 'decomp_volume',
          description: null,
          expression: null,
          filterable: true,
          groupby: true,
          id: 929,
          is_dttm: false,
          optionName: '_col_decomp_volume',
          python_date_format: null,
          type: 'DOUBLE PRECISION',
          verbose_name: null,
        },
        expressionType: 'SIMPLE',
        hasCustomLabel: false,
        isNew: false,
        label: 'SUM(decomp_volume)',
        optionName: 'metric_sr9p3ry3clb_b1u2lakyayt',
        sqlExpression: null,
      },
      {
        aggregate: 'AVG',
        column: {
          column_name: 'decomp_volume',
          description: null,
          expression: null,
          filterable: true,
          groupby: true,
          id: 929,
          is_dttm: false,
          optionName: '_col_decomp_volume',
          python_date_format: null,
          type: 'DOUBLE PRECISION',
          verbose_name: null,
        },
        expressionType: 'SIMPLE',
        hasCustomLabel: false,
        isNew: false,
        label: 'AVG(decomp_volume)',
        optionName: 'metric_n41ou9pm0j_lsj1vl14yw',
        sqlExpression: null,
      },
    ],
    adhocFilters: [
      {
        clause: 'WHERE',
        comparator: '',
        expressionType: 'SIMPLE',
        filterOptionName: 'filter_lmokpzrbemn_k54uooy8t',
        isExtra: false,
        isNew: false,
        operator: 'IS NOT NULL',
        sqlExpression: null,
        subject: 'due_to_group',
      },
    ],
    rowLimit: '20',
    colorScheme: 'SUPERSET_DEFAULT',
    layout: 'horizontal',
    numbersFormat: '.1s',
    labelsColor: 'white',
    stackedBars: true,
    xAxisLabel: 'Categories',
    xAxisTickLabelAngle: '45',
    yAxisLabel: 'Volume',
    yAxisTickLabelAngle: '90',
  },
  height: 628,
  hooks: {},
  queryData: {
    cache_key: '4de7c3e9eadd8d58b64b3fec7343d0ab',
    cached_dttm: '2020-07-29T12:04:56',
    cache_timeout: 86400,
    error: null,
    is_cached: true,
    query:
      'SELECT due_to_group AS due_to_group,\n       period AS period,\n       sum(decomp_volume) AS "SUM(decomp_volume)",\n       AVG(decomp_volume) AS "AVG(decomp_volume)"\nFROM w3q\nWHERE due_to_group IS NOT NULL\nGROUP BY due_to_group,\n         period\nORDER BY "SUM(decomp_volume)" DESC\nLIMIT 20',
    status: 'success',
    stacktrace: null,
    rowcount: 20,
    data: [
      {
        due_to_group: 'Competitor TV Advertising',
        period: 'Total Period',
        'SUM(decomp_volume)': 2644304,
        'AVG(decomp_volume)': 330538,
      },
      {
        due_to_group: 'Facebook',
        period: '2020',
        'SUM(decomp_volume)': 1945565.5,
        'AVG(decomp_volume)': 486391.375,
      },
      {
        due_to_group: 'COREBASE',
        period: 'Total Period',
        'SUM(decomp_volume)': 1580074,
        'AVG(decomp_volume)': 395018.5,
      },
      {
        due_to_group: 'Competitor TV Advertising',
        period: '2019',
        'SUM(decomp_volume)': 1213252,
        'AVG(decomp_volume)': 303313,
      },
      {
        due_to_group: 'DISPLAY',
        period: 'Total Period',
        'SUM(decomp_volume)': 1010512,
        'AVG(decomp_volume)': 252628,
      },
      {
        due_to_group: 'Online Advertising',
        period: '2018',
        'SUM(decomp_volume)': 999990,
        'AVG(decomp_volume)': 249997.5,
      },
      {
        due_to_group: 'COREBASE',
        period: '2017',
        'SUM(decomp_volume)': 852094,
        'AVG(decomp_volume)': 213023.5,
      },
      {
        due_to_group: 'COREBASE',
        period: '2018',
        'SUM(decomp_volume)': 736576,
        'AVG(decomp_volume)': 184144,
      },
      {
        due_to_group: 'DISPLAY',
        period: '2017',
        'SUM(decomp_volume)': 621608,
        'AVG(decomp_volume)': 155402,
      },
      {
        due_to_group: 'DISPLAY',
        period: '2018',
        'SUM(decomp_volume)': 388904,
        'AVG(decomp_volume)': 97226,
      },
      {
        due_to_group: 'Halo TV',
        period: 'Total Period',
        'SUM(decomp_volume)': 113646,
        'AVG(decomp_volume)': 14205.75,
      },
      {
        due_to_group: 'Facebook',
        period: '2019',
        'SUM(decomp_volume)': 94909,
        'AVG(decomp_volume)': 23727.25,
      },
      {
        due_to_group: 'Online Advertising',
        period: '2017',
        'SUM(decomp_volume)': 81334,
        'AVG(decomp_volume)': 20333.5,
      },
      {
        due_to_group: 'Halo TV',
        period: '2018',
        'SUM(decomp_volume)': 66828,
        'AVG(decomp_volume)': 8353.5,
      },
      {
        due_to_group: 'Halo TV',
        period: '2017',
        'SUM(decomp_volume)': 46818,
        'AVG(decomp_volume)': 5852.25,
      },
      {
        due_to_group: 'DFSI',
        period: 'Total Period',
        'SUM(decomp_volume)': 32956,
        'AVG(decomp_volume)': 1647.8,
      },
      {
        due_to_group: 'Competitor TV Advertising',
        period: '2017',
        'SUM(decomp_volume)': 25252,
        'AVG(decomp_volume)': 6313,
      },
      {
        due_to_group: 'Facebook',
        period: '2017',
        'SUM(decomp_volume)': 23932,
        'AVG(decomp_volume)': 2991.5,
      },
      {
        due_to_group: 'DFSI',
        period: '2017',
        'SUM(decomp_volume)': 21466,
        'AVG(decomp_volume)': 1788.83333333333,
      },
      {
        due_to_group: 'Competitive Coupons',
        period: 'Total Period',
        'SUM(decomp_volume)': 17448,
        'AVG(decomp_volume)': 2181,
      },
    ],
  },
  width: 507,
};