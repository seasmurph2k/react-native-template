import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  Surface,
  Card,
  Text,
  Button,
  Avatar,
  FAB,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import ToggleTheme from './src/ToggleTheme';
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(MD3LightTheme);
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{flexGrow: 1}}>
          <StatusBar />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{flexGrow: 1}}>
            <Surface style={{flexGrow: 1}}>
              <ToggleTheme />
              <Card>
                <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  left={LeftContent}
                />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              <Card>
                <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  left={LeftContent}
                />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              <Card>
                <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  left={LeftContent}
                />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              <Card>
                <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  left={LeftContent}
                />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            </Surface>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default App;
