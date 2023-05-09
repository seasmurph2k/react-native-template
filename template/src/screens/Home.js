import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {Card, Text, Surface, Button, Avatar} from 'react-native-paper';
import ToggleTheme from '../utils/ToggleTheme';

export default function Home({navigation}) {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{flexGrow: 1}}>
        <Surface style={{flexGrow: 1}}>
          <ToggleTheme />
          <Button onPress={() => navigation.navigate('Profile')}>
            Profile
          </Button>
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
  );
}
