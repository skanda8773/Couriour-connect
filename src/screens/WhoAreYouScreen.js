import React from 'react';
import {View} from 'react-native';
import {Shell, Card, HeroTitle, Button} from '../ui/ui';

// Re-implemented to match the project's UI primitives (Shell/Card/Button).
export default function WhoAreYouScreen({navigation}) {
  return (
    // disable scrolling so we can vertically center the content
    <Shell className="bg-primary" scroll={false}>
      <View className="flex-1 justify-center px-5">
        <View className="mb-6">
          <HeroTitle title="Choose Login Type" subtitle="Continue as an admin or customer" dark align="center" />
        </View>

        <Card className="p-4">
          <View className="space-y-3">
            <Button label="Customer Login" onPress={() => navigation.navigate('Login')} className="w-full" />
            <Button label="Admin Login" type="soft" onPress={() => navigation.navigate('AdminLogin')} className="w-full" />
          </View>
        </Card>
      </View>
    </Shell>
  );
}

