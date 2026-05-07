import React from 'react';
import {Pressable, ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from './theme';

export {Colors} from './theme';

export function Shell({children, dark = false, scroll = true, className = ''}) {
  const bgClass = dark ? 'bg-dark' : 'bg-background';
  const barStyle = dark ? 'light-content' : 'dark-content';

  return (
    <SafeAreaView className={`flex-1 ${bgClass} ${className}`}>
      <StatusBar barStyle={barStyle} backgroundColor={dark ? Colors.dark : Colors.background} />
      {scroll ? (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 28}}>
          {children}
        </ScrollView>
      ) : (
        <View className="flex-1">{children}</View>
      )}
    </SafeAreaView>
  );
}

export function Header({navigation, title, subtitle, dark = false, back = false, right}) {
  return (
    <View className={`rounded-b-[28px] px-5 pb-5 pt-4 ${dark ? 'bg-dark' : 'bg-primary'}`}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {back ? (
            <Pressable onPress={() => navigation.goBack()} hitSlop={12} className="mr-3 h-8 w-8 items-center justify-center rounded-2xl bg-white/15">
              <Text className="text-2xl leading-6 text-white">‹</Text>
            </Pressable>
          ) : null}
          <View>
            <Text className="text-[17px] font-bold text-white">{title}</Text>
            {subtitle ? <Text className="mt-1 text-[11px] text-white/75">{subtitle}</Text> : null}
          </View>
        </View>
        {right || null}
      </View>
    </View>
  );
}

export function HeroTitle({title, subtitle, dark = false, align = 'left'}) {
  const centered = align === 'center';
  return (
    <View className={centered ? 'items-center' : 'items-start'}>
      <Text className={`text-[24px] font-extrabold ${dark ? 'text-white' : 'text-text'} ${centered ? 'text-center' : ''}`}>
        {title}
      </Text>
      {subtitle ? (
        <Text className={`mt-1 text-[12px] ${dark ? 'text-white/75' : 'text-muted'} ${centered ? 'text-center' : ''}`}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

export function Field({label, placeholder, style, dark = false, secureTextEntry, multiline, value, onChangeText}) {
  return (
    <View style={style}>
      {label ? <Text className="mb-1.5 text-[11px] text-muted">{label}</Text> : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={dark ? 'lightsteelblue' : 'lightsteelblue'}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        defaultValue={value}
        onChangeText={onChangeText}
        className={`rounded-2xl border px-3 py-3 text-[13px] ${dark ? 'border-darkLine bg-dark2 text-white' : 'border-border bg-white text-text'} ${multiline ? 'min-h-[78px]' : ''}`}
        style={multiline ? {textAlignVertical: 'top'} : null}
      />
    </View>
  );
}

export function Chip({label, active = false, colorClassName = 'bg-primary', softClassName = 'bg-primarySoft', textClassName = 'text-primary', style}) {
  return (
    <View
      style={style}
      className={`rounded-2xl border px-3 py-2 ${active ? `${colorClassName} border-transparent` : `${softClassName} border-transparent`}`}>
      <Text className={`text-[11px] font-bold ${active ? 'text-white' : textClassName}`}>{label}</Text>
    </View>
  );
}

export function StatusPill({label, tone = 'blue'}) {
  const palette = {
    blue: {wrap: 'bg-softBlue', text: 'text-info'},
    green: {wrap: 'bg-softGreen', text: 'text-success'},
    orange: {wrap: 'bg-softOrange', text: 'text-orange'},
    red: {wrap: 'bg-softRed', text: 'text-red'},
    neutral: {wrap: 'bg-softGray', text: 'text-muted'},
  };
  const p = palette[tone] || palette.blue;
  return (
    <View className={`self-start rounded-full px-3 py-1.5 ${p.wrap}`}>
      <Text className={`text-[11px] font-bold ${p.text}`}>{label}</Text>
    </View>
  );
}

export function Button({label, onPress, type = 'primary', className = '', textClassName = '', icon}) {
  const container =
    type === 'ghost'
      ? 'border border-border bg-white'
      : type === 'soft'
        ? 'bg-softBlue'
        : 'bg-primary';
  const text = type === 'ghost' || type === 'soft' ? 'text-primary' : 'text-white';

  return (
    <Pressable onPress={onPress} className={`items-center rounded-2xl px-4 py-3 ${container} ${className}`}>
      <Text className={`text-[13px] font-bold ${text} ${textClassName}`}>{icon ? `${icon} ${label}` : label}</Text>
    </Pressable>
  );
}

export function Card({children, dark = false, className = '', style}) {
  const base = dark ? 'border-darkLine bg-darkCard' : 'border-border bg-card';
  return (
    <View style={style} className={`rounded-3xl border p-4 shadow-sm ${base} ${className}`}>
      {children}
    </View>
  );
}

export function ListRow({icon, title, subtitle, right, tone = 'blue'}) {
  const toneMap = {
    green: 'bg-softGreen',
    orange: 'bg-softOrange',
    red: 'bg-softRed',
    neutral: 'bg-softGray',
    blue: 'bg-softBlue',
  };
  const iconClass = toneMap[tone] || toneMap.blue;
  return (
    <View className="flex-row items-center">
      <View className={`mr-3 h-8 w-8 items-center justify-center rounded-2xl ${iconClass}`}>
        <Text className="text-[14px]">{icon}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-[12px] font-bold text-text">{title}</Text>
        {subtitle ? <Text className="mt-0.5 text-[11px] text-muted">{subtitle}</Text> : null}
      </View>
      <Text className="text-[11px] font-bold text-muted">{right || '›'}</Text>
    </View>
  );
}

export function BottomNav({navigation, active}) {
  const userTabs = [
    {key: 'Home', label: 'Home', icon: '🏠'},
    {key: 'MyParcels', label: 'My Parcels', icon: '📦'},
    {key: 'Notifications', label: 'Alerts', icon: '🔔'},
    {key: 'Profile', label: 'Profile', icon: '👤'},
  ];

  return (
    <View className="px-5 pb-3">
      <View className="flex-row justify-around rounded-[18px] border border-border bg-card py-3">
        {userTabs.map((item) => {
          const isActive = item.key === active;
          return (
            <Pressable key={item.key} onPress={() => navigation.navigate(item.key)} className="flex-1 items-center justify-center">
              <Text className={`text-[16px] ${isActive ? 'opacity-100' : 'opacity-50'}`}>{item.icon}</Text>
              <Text className={`mt-1 text-[10px] font-semibold ${isActive ? 'text-primary' : 'text-muted'}`}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export function MetricCard({value, label, icon, tone = 'blue'}) {
  const palette = {
    blue: 'bg-softBlue',
    green: 'bg-softGreen',
    orange: 'bg-softOrange',
    red: 'bg-softRed',
  };
  return (
    <View className="w-[48%] rounded-[16px] border border-border bg-card p-3">
      <View className={`h-7 w-7 items-center justify-center rounded-2xl ${palette[tone] || palette.blue}`}>
        <Text className="text-[14px]">{icon}</Text>
      </View>
      <Text className="mt-2.5 text-[18px] font-extrabold text-primary">{value}</Text>
      <Text className="mt-0.5 text-[11px] text-muted">{label}</Text>
    </View>
  );
}

export function QuickAction({icon, label, subtitle, onPress, tone = 'blue'}) {
  const palette = {
    blue: 'bg-softBlue',
    green: 'bg-softGreen',
    orange: 'bg-softOrange',
    red: 'bg-softRed',
  };
  return (
    <Pressable onPress={onPress} className="w-[48%] rounded-3xl border border-border bg-card p-3">
      <View className={`mb-2 h-9 w-9 items-center justify-center rounded-2xl ${palette[tone] || palette.blue}`}>
        <Text className="text-[16px]">{icon}</Text>
      </View>
      <Text className="text-[12px] font-bold text-text">{label}</Text>
      {subtitle ? <Text className="mt-0.5 text-[10px] text-muted">{subtitle}</Text> : null}
    </Pressable>
  );
}

export function TimelineItem({title, subtitle, done = false, last = false, tone = 'blue'}) {
  const colorClass = done ? 'bg-success' : tone === 'orange' ? 'bg-orange' : 'bg-info';
  return (
    <View className="flex-row">
      <View className="w-[18px] items-center">
        <View className={`mt-1.5 h-3 w-3 rounded-full ${colorClass}`} />
        {!last ? <View className="mt-1 flex-1 w-[2px] bg-line" /> : null}
      </View>
      <View className="flex-1 pb-3">
        <Text className="text-[12px] font-bold text-text">{title}</Text>
        <Text className="mt-0.5 text-[11px] text-muted">{subtitle}</Text>
      </View>
    </View>
  );
}

export function SectionTitle({title, subtitle, dark = false, style}) {
  return (
    <View style={style}>
      <Text className={`text-[14px] font-bold ${dark ? 'text-white' : 'text-text'}`}>{title}</Text>
      {subtitle ? <Text className={`mt-1 text-[11px] ${dark ? 'text-white/70' : 'text-muted'}`}>{subtitle}</Text> : null}
    </View>
  );
}
