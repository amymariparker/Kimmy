import { AppRegistry } from 'react-native'
import { useScreens } from 'react-native-screens'

import { App } from '@devhub/components/src/components/App'

useScreens()

AppRegistry.registerComponent('devhub', () => App)
