import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './Style'
import gunInstance from 'App/Services/GunService'
import { login, isValidKey } from 'App/Services/IrisService'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanPrivateKeyScreen extends React.Component {
  onSuccess = (e) => {
    try {
      const key = JSON.parse(e.data)
      if (isValidKey(key)) {
        gunInstance.user().auth(key)
        login(gunInstance, key)
        this.props.navigation.navigate('ChatListScreen')
      }
    } catch (err) {

    }
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        // flashMode={QRCodeScanner.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>Scan your private key QR code</Text> from another device.
          </Text>
        }
      />
    );
  }
}

export default ScanPrivateKeyScreen
