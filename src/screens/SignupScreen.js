import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Button, Card, Field, HeroTitle, Shell} from '../ui';

export default function SignupScreen({navigation}) {
  return (
    <Shell className="bg-primary">
      <View className="px-5 pb-4 pt-5">
        <HeroTitle title="Create Account" subtitle="Join CourierConnect today" dark />
      </View>

      <View className="px-5 pb-6">
        <Card className="p-4">
          <Field label="Full Name" placeholder="Enter your name" />
          <Field label="Phone Number" placeholder="Enter mobile number" style={{marginTop: 12}} />
          <Field label="Email Address" placeholder="Enter email address" style={{marginTop: 12}} />
          <Field label="Password" placeholder="Create password" secureTextEntry style={{marginTop: 12}} />
          <Field label="Confirm Password" placeholder="Confirm password" secureTextEntry style={{marginTop: 12}} />
          <Button label="Create Account" onPress={() => navigation.replace('Home')} className="mt-4" />
          <Pressable onPress={() => navigation.goBack()} className="mt-3 items-center">
            <Text className="text-[11px] text-muted">Already have an account? Login</Text>
          </Pressable>
        </Card>
      </View>
    </Shell>
  );
}
