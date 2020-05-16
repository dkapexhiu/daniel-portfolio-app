import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; 
import drawerContentComponents from './drawerContentComponents';
import { WebView } from 'react-native-webview';

class HeaderNavigationBar extends Component {
    render() {
        return (<View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#00bfff'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                onPress={() => { this.props.navigation.openDrawer() }}>
                <Image
                    source={{uri: './assets/menu-icon.png'}}
                />
            </TouchableHighlight>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white', marginLeft:'auto', marginRight:'auto', marginTop: 15 }}>
              Minimal Portfolio
            </Text>
        </View>);
    }
}

export class AitcScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
            <WebView
              source={{uri: 'https://aitc.org.al/'}}
              style={{flex: 1}}
            />    
        </View>);
    }
}

export class AlbaSolutionsScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'http://albasolutions.fr/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class AlbRecoveryScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://albrecovery.al/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class BlogScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://blog.danielkapexhiu.com'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class DanielScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://danielkapexhiu.com'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class FaasScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://faasarchitects.al/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class GaaScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://groupanalysisalbania.org/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class GsaScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://group-gsa.com/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class HoteliGjuetiseScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://hoteligjuetise.al/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class ProductManagementScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://pm.danielkapexhiu.com/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class SamueleScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://samuele.al/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class SukoScreen extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
        <WebView
          source={{uri: 'https://suko.al/'}}
          style={{flex: 1}}
        />
        </View>);
    }
}

export class AlbaniaScreen extends Component {
  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
      <WebView
        source={{uri: 'http://albania.al/'}}
        style={{flex: 1}}
      />
      </View>);
  }
}

export class UnitirScreen extends Component {
  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
      <WebView
        source={{uri: 'https://unitir.edu.al/'}}
        style={{flex: 1}}
      />
      </View>);
  }
}

export class KozoScreen extends Component {
  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
      <WebView
        source={{uri: 'http://kozogh.com'}}
        style={{flex: 1}}
      />
      </View>);
  }
}

export default DrawerNavigator (
    {
      Aitc:{
        screen:AitcScreen
      },
      AlbRecovery:{
        screen:AlbRecoveryScreen
      },
      AlbaSolutions:{
        screen:AlbaSolutionsScreen
      },
      Blog:{
        screen:BlogScreen
      },
      Daniel:{
        screen:DanielScreen
      },
      Faas:{
        screen:FaasScreen
      },
      Gaa:{
        screen:GaaScreen
      },
      Gsa:{
        screen:GsaScreen
      },
      HoteliGjuetise:{
        screen:HoteliGjuetiseScreen
      },
      ProductManagement:{
        screen:ProductManagementScreen
      },
      Samuele:{
        screen:SamueleScreen
      },
      Suko:{
        screen:SukoScreen
      },
      Albania:{
        screen:AlbaniaScreen
      },
      Unitir:{
        screen:UnitirScreen
      },
      Kozo:{
        screen:KozoScreen
      }
    },{
        initialRouteName:'Daniel',
        contentComponent: drawerContentComponents
    }
)

