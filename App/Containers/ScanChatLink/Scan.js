import React from 'react'
import { PropTypes } from 'prop-types'
import { Chat } from 'iris-lib'
import styles from './Style'
import gunInstance from 'App/Services/GunService'
import { login, session } from 'App/Services/IrisService'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanChatLinkScreen extends React.Component {
  onSuccess = (e) => {
    if (e.data.indexOf('http') === 0 && e.data.indexOf('s=') > 0 && e.data.indexOf('k=') > 0) {
      const chat = new Chat({key: session.keypair, gun: gunInstance, chatLink: e.data})
      this.props.navigation.navigate('ChatListScreen')
    }
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        // flashMode={QRCodeScanner.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>Scan someone's chat link</Text>
          </Text>
        }
      />
    );
  }
}

export default ScanChatLinkScreen