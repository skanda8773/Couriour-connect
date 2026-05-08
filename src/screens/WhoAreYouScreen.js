import React from 'react';
import {View} from 'react-native';
import {Shell, Card, HeroTitle, Button} from '../ui/ui';

// Re-implemented to match the project's UI primitives (Shell/Card/Button).
export default function WhoAreYouScreen({navigation}) {
  return (
    <Shell className="bg-primary">
      <View className="px-5 pb-4 pt-5">
        <HeroTitle title="Choose Login Type" subtitle="Continue as an admin or customer" dark align="center" />
      </View>

      <View className="px-5 pb-6">
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

