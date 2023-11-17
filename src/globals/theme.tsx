interface Theme {
  colors: {
    textPrimary: string
    textSecondary: string
    primary: string
    white: string
  }
  fontSizes: {
    body: number
    subHeading: number
  }
  fonts: {
    main: string
  }
  fontWeight: {
    normal: '400'
    bold: '700'
  }
  align: {
    centered: 'center'
  }
  appBar: {
    primary: string
    textPrimary: string
  }
}

export const theme: Theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fff',
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
  align: {
    centered: 'center',
  },
  appBar: {
    primary: '#24292e',
    textPrimary: '#fff',
  },
}
