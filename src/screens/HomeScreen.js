import React from 'react';
import {Text, View} from 'react-native';
import {BottomNav, Card, ListRow, QuickAction, SectionTitle, Shell} from '../ui/ui';

export default function HomeScreen({navigation}) {
  return (
    <Shell>
      <View className="rounded-b-[28px] bg-primary px-5 pb-5 pt-4">
        <Text className="text-2xl font-extrabold text-white">Hi, Skanda 👋</Text>
        <Text className="mt-1 text-xs text-white/80">What would you like to do?</Text>
        <View className="mt-4 flex-row">
          <View className="mr-2 flex-1 rounded-2xl bg-dark px-4 py-3 items-center">
            <Text className="text-base font-extrabold text-white">12</Text>
            <Text className="mt-0.5 text-[10px] text-white/75">Sent</Text>
          </View>
          <View className="mr-2 flex-1 rounded-2xl bg-dark px-4 py-3 items-center">
            <Text className="text-base font-extrabold text-white">3</Text>
            <Text className="mt-0.5 text-[10px] text-white/75">In Transit</Text>
          </View>
          <View className="flex-1 rounded-2xl bg-dark px-4 py-3 items-center">
            <Text className="text-base font-extrabold text-white">9</Text>
            <Text className="mt-0.5 text-[10px] text-white/75">Delivered</Text>
          </View>
        </View>
      </View>

      <View className="px-5 pt-4">
        <View className="flex-row flex-wrap justify-between">
          <QuickAction icon="📮" label="Send Parcel" subtitle="Ship a new parcel" onPress={() => navigation.navigate('SendParcel')} tone="blue" />
          <QuickAction icon="🔎" label="Track Parcel" subtitle="Enter tracking ID" onPress={() => navigation.navigate('Track')} tone="orange" />
          <QuickAction icon="📦" label="My Parcels" subtitle="View all your parcels" onPress={() => navigation.navigate('MyParcels')} tone="green" />
          <QuickAction icon="🔔" label="Notifications" subtitle="Updates & alerts" onPress={() => navigation.navigate('Notifications')} tone="red" />
        </View>

        <SectionTitle title="Recent Activity" className="mt-5 mb-2" />
        <Card>
          <ListRow icon="📮" title="CC-2024001" subtitle="In Transit" right="2m ago" tone="orange" />
          <View className="my-2 h-px bg-border" />
          <ListRow icon="✅" title="CC-2024002" subtitle="Delivered" right="10m ago" tone="green" />
          <View className="my-2 h-px bg-border" />
          <ListRow icon="📦" title="CC-2024003" subtitle="Picked Up" right="35m ago" tone="blue" />
        </Card>
      </View>

      <BottomNav navigation={navigation} active="Home" />
    </Shell>
  );
}
