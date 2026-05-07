import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Button, Card, Field, HeroTitle, Shell} from '../ui/ui';

export default function LoginScreen({navigation}) {
  return (
    <Shell className="bg-primary">
      <View className="px-5 pb-4 pt-5">
        <HeroTitle title="Welcome Back 👋" subtitle="Login to your account" dark />
      </View>

      <View className="px-5 pb-6">
        <Card className="p-4">
          <Field label="Email / Phone" placeholder="Enter your email or mobile number" />
          <Field label="Password" placeholder="Enter password" secureTextEntry style={{marginTop: 12}} />
          <Pressable className="mt-2 self-end">
            <Text className="text-[11px] font-semibold text-primary">Forgot Password?</Text>
          </Pressable>
          <Button label="Login" onPress={() => navigation.replace('Home')} className="mt-3" />
          <Pressable onPress={() => navigation.navigate('Signup')} className="mt-3 items-center">
            <Text className="text-[11px] text-muted">Don’t have an account? Sign Up</Text>
          </Pressable>
        </Card>

        <Pressable onPress={() => navigation.navigate('AdminLogin')} className="mt-2 items-center">
          <Text className="text-[11px] font-semibold text-white/80">Admin Portal</Text>
        </Pressable>
      </View>
    </Shell>
  );
}
