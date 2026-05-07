import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const C = {
  primary: '#2f6fed',
  primaryDark: '#234EBB',
  primarySoft: '#DCE8FF',
  background: '#F4F6FB',
  card: '#FFFFFF',
  text: '#1C2440',
  muted: '#8B92A6',
  border: '#E6EAF2',
  line: '#D7DCE8',
  success: '#31C47B',
  info: '#3C7DFF',
  warning: '#FFB547',
  orange: '#FF8A00',
  red: '#FF5A5F',
  dark: '#11162A',
  dark2: '#171E33',
  darkCard: '#1E2741',
  darkLine: '#2A3354',
  softRed: '#FFE6E6',
  softGreen: '#E7FAEE',
  softOrange: '#FFF1DE',
  softBlue: '#EEF4FF',
  softGray: '#F1F3F8',
  white: '#FFFFFF',
};

const R = {
  xl: 28,
  lg: 22,
  md: 16,
  sm: 12,
  xs: 10,
};

const S = {
  screen: {flex: 1, backgroundColor: C.background},
  scroll: {paddingBottom: 28},
  hero: {
    backgroundColor: C.primary,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  heroDark: {
    backgroundColor: C.dark,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTitle: {color: C.white, fontSize: 17, fontWeight: '700'},
  headerSubtitle: {color: 'rgba(255,255,255,0.78)', fontSize: 11, marginTop: 3},
  card: {
    backgroundColor: C.card,
    borderRadius: R.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: C.border,
  },
  darkCard: {
    backgroundColor: C.darkCard,
    borderRadius: R.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: C.darkLine,
  },
  btnPrimary: {
    backgroundColor: C.primary,
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnDark: {
    backgroundColor: C.primary,
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnGhost: {
    backgroundColor: C.white,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
  },
  btnSoft: {
    backgroundColor: C.softBlue,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: C.text,
    backgroundColor: C.white,
  },
  darkInput: {
    borderWidth: 1,
    borderColor: C.darkLine,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: C.white,
    backgroundColor: '#202844',
  },
  label: {fontSize: 11, color: '#7B8499', marginBottom: 6},
  subLabel: {fontSize: 11, color: C.muted},
  sectionTitle: {fontSize: 14, color: C.text, fontWeight: '700'},
  sectionTitleDark: {fontSize: 14, color: C.white, fontWeight: '700'},
};

const userTabs = [
  {key: 'Home', label: 'Home', icon: '🏠'},
  {key: 'MyParcels', label: 'My Parcels', icon: '📦'},
  {key: 'Notifications', label: 'Alerts', icon: '🔔'},
  {key: 'Profile', label: 'Profile', icon: '👤'},
];

function Shell({children, dark = false, scroll = true, style, contentStyle}) {
  return (
    <SafeAreaView style={[S.screen, dark && {backgroundColor: C.dark}, style]}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} backgroundColor={dark ? C.dark : C.background} />
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[S.scroll, contentStyle]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[{flex: 1}, contentStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

function Header({navigation, title, subtitle, dark = false, back = false, right}) {
  return (
    <View style={[dark ? S.heroDark : S.hero]}>
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          {back ? (
            <Pressable onPress={() => navigation.goBack()} hitSlop={12} style={styles.backBtn}>
              <Text style={styles.backText}>‹</Text>
            </Pressable>
          ) : null}
          <View>
            <Text style={S.headerTitle}>{title}</Text>
            {subtitle ? <Text style={S.headerSubtitle}>{subtitle}</Text> : null}
          </View>
        </View>
        {right || null}
      </View>
    </View>
  );
}

function HeroTitle({title, subtitle, dark = false, align = 'left'}) {
  return (
    <View style={{alignItems: align === 'center' ? 'center' : 'flex-start'}}>
      <Text style={[styles.heroTitle, dark && {color: C.white}, align === 'center' && {textAlign: 'center'}]}>
        {title}
      </Text>
      {subtitle ? (
        <Text style={[styles.heroSubtitle, dark && {color: 'rgba(255,255,255,0.74)'}, align === 'center' && {textAlign: 'center'}]}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

function Field({label, placeholder, style, dark = false, secureTextEntry, multiline, value}) {
  return (
    <View style={style}>
      {label ? <Text style={S.label}>{label}</Text> : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={dark ? '#8790A9' : '#A6AFC0'}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        defaultValue={value}
        style={[dark ? S.darkInput : S.input, multiline && {minHeight: 78, textAlignVertical: 'top'}]}
      />
    </View>
  );
}

function Chip({label, active = false, color = C.primary, softColor = C.primarySoft, style}) {
  return (
    <View
      style={[
        styles.chip,
        {backgroundColor: active ? color : softColor, borderColor: active ? color : 'transparent'},
        style,
      ]}>
      <Text style={[styles.chipText, {color: active ? C.white : color}]}>{label}</Text>
    </View>
  );
}

function StatusPill({label, tone = 'blue'}) {
  const palette = {
    blue: {bg: C.softBlue, fg: C.info},
    green: {bg: C.softGreen, fg: C.success},
    orange: {bg: C.softOrange, fg: C.orange},
    red: {bg: C.softRed, fg: C.red},
    neutral: {bg: C.softGray, fg: C.muted},
  };
  const p = palette[tone] || palette.blue;
  return <View style={[styles.pill, {backgroundColor: p.bg}]}><Text style={[styles.pillText, {color: p.fg}]}>{label}</Text></View>;
}

function Button({label, onPress, type = 'primary', style, textStyle, icon}) {
  const container = type === 'ghost' ? S.btnGhost : type === 'soft' ? S.btnSoft : S.btnPrimary;
  return (
    <Pressable onPress={onPress} style={({pressed}) => [container, pressed && {opacity: 0.9}, style]}>
      <Text style={[styles.buttonText, type === 'ghost' && {color: C.primary}, type === 'soft' && {color: C.primary}, textStyle]}>
        {icon ? `${icon} ${label}` : label}
      </Text>
    </Pressable>
  );
}

function SectionTitle({title, subtitle, dark = false, style}) {
  return (
    <View style={style}>
      <Text style={dark ? S.sectionTitleDark : S.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    </View>
  );
}

function Card({children, dark = false, style}) {
  return <View style={[dark ? S.darkCard : S.card, style]}>{children}</View>;
}

function ListRow({icon, title, subtitle, right, tone = 'blue'}) {
  const bg = tone === 'green' ? C.softGreen : tone === 'orange' ? C.softOrange : tone === 'red' ? C.softRed : C.softBlue;
  return (
    <View style={styles.listRow}>
      <View style={[styles.listIcon, {backgroundColor: bg}]}>
        <Text style={styles.listIconText}>{icon}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.listTitle}>{title}</Text>
        {subtitle ? <Text style={styles.listSubtitle}>{subtitle}</Text> : null}
      </View>
      <Text style={styles.listRight}>{right || '›'}</Text>
    </View>
  );
}

function BottomNav({navigation, active}) {
  return (
    <View style={styles.bottomNavWrap}>
      <View style={styles.bottomNav}>
        {userTabs.map((item) => {
          const isActive = item.key === active;
          return (
            <Pressable key={item.key} onPress={() => navigation.navigate(item.key)} style={styles.bottomNavItem}>
              <Text style={[styles.bottomNavIcon, {opacity: isActive ? 1 : 0.5}]}>{item.icon}</Text>
              <Text style={[styles.bottomNavLabel, {color: isActive ? C.primary : '#8F96A9'}]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function MetricCard({value, label, icon, tone = 'blue'}) {
  const p = tone === 'green' ? C.softGreen : tone === 'orange' ? C.softOrange : tone === 'red' ? C.softRed : C.softBlue;
  return (
    <View style={styles.metricCard}>
      <View style={[styles.metricIcon, {backgroundColor: p}]}>
        <Text>{icon}</Text>
      </View>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

function QuickAction({icon, label, subtitle, onPress, tone = 'blue'}) {
  const bg = tone === 'green' ? C.softGreen : tone === 'orange' ? C.softOrange : tone === 'red' ? C.softRed : C.softBlue;
  return (
    <Pressable onPress={onPress} style={styles.quickAction}>
      <View style={[styles.quickIcon, {backgroundColor: bg}]}>
        <Text style={styles.quickIconText}>{icon}</Text>
      </View>
      <Text style={styles.quickActionLabel}>{label}</Text>
      {subtitle ? <Text style={styles.quickActionSub}>{subtitle}</Text> : null}
    </Pressable>
  );
}

function TimelineItem({title, subtitle, done = false, last = false, tone = 'blue'}) {
  const color = done ? C.success : tone === 'orange' ? C.orange : C.info;
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineCol}>
        <View style={[styles.timelineDot, {backgroundColor: color}]} />
        {!last ? <View style={styles.timelineLine} /> : null}
      </View>
      <View style={{flex: 1, paddingBottom: 10}}>
        <Text style={styles.timelineTitle}>{title}</Text>
        <Text style={styles.timelineSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export function SplashScreen({navigation}) {
  return (
    <Shell scroll={false} style={{backgroundColor: C.primary}}>
      <View style={styles.splashCenter}>
        <View style={styles.splashLogoOuter}>
          <View style={styles.splashLogoInner}>
            <Text style={styles.splashEmoji}>📦</Text>
          </View>
        </View>
        <Text style={styles.splashTitle}>CourierConnect</Text>
        <Text style={styles.splashSub}>Delivering Trust, Every Mile</Text>
        <View style={styles.splashDot} />
        <Pressable onPress={() => navigation.replace('Login')} style={styles.splashCta}>
          <Text style={styles.splashCtaText}>Get Started</Text>
        </Pressable>
      </View>
    </Shell>
  );
}

export function LoginScreen({navigation}) {
  return (
    <Shell style={{backgroundColor: C.primary}} scroll>
      <View style={styles.authTop}>
        <HeroTitle title="Welcome Back 👋" subtitle="Login to your account" dark />
      </View>
      <View style={styles.authCardWrap}>
        <Card style={styles.authCard}>
          <Field label="Email / Phone" placeholder="Enter your email or mobile number" />
          <Field label="Password" placeholder="Enter password" secureTextEntry style={{marginTop: 12}} />
          <Pressable style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>
          <Button label="Login" onPress={() => navigation.replace('Home')} style={{marginTop: 10}} />
          <Pressable onPress={() => navigation.navigate('Signup')} style={styles.footerLinkWrap}>
            <Text style={styles.footerLink}>Don’t have an account? Sign Up</Text>
          </Pressable>
        </Card>
        <Pressable onPress={() => navigation.navigate('AdminLogin')} style={styles.adminPortalLink}>
          <Text style={styles.adminPortalText}>Admin Portal</Text>
        </Pressable>
      </View>
    </Shell>
  );
}

export function SignupScreen({navigation}) {
  return (
    <Shell style={{backgroundColor: C.primary}} scroll>
      <View style={styles.authTop}>
        <HeroTitle title="Create Account" subtitle="Join CourierConnect today" dark />
      </View>
      <View style={styles.authCardWrap}>
        <Card style={styles.authCard}>
          <Field label="Full Name" placeholder="Enter your name" />
          <Field label="Phone Number" placeholder="Enter mobile number" style={{marginTop: 12}} />
          <Field label="Email Address" placeholder="Enter email address" style={{marginTop: 12}} />
          <Field label="Password" placeholder="Create password" secureTextEntry style={{marginTop: 12}} />
          <Field label="Confirm Password" placeholder="Confirm password" secureTextEntry style={{marginTop: 12}} />
          <Button label="Create Account" onPress={() => navigation.replace('Home')} style={{marginTop: 14}} />
          <Pressable onPress={() => navigation.goBack()} style={styles.footerLinkWrap}>
            <Text style={styles.footerLink}>Already have an account? Login</Text>
          </Pressable>
        </Card>
      </View>
    </Shell>
  );
}

export function HomeScreen({navigation}) {
  return (
    <Shell>
      <View style={styles.homeHero}>
        <View style={styles.heroTopRow}>
          <View>
            <Text style={styles.homeGreeting}>Hi, Skanda 👋</Text>
            <Text style={styles.homeSub}>What would you like to do?</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statBubble}><Text style={styles.statNum}>12</Text><Text style={styles.statTxt}>Sent</Text></View>
          <View style={styles.statBubble}><Text style={styles.statNum}>3</Text><Text style={styles.statTxt}>In Transit</Text></View>
          <View style={styles.statBubble}><Text style={styles.statNum}>9</Text><Text style={styles.statTxt}>Delivered</Text></View>
        </View>
      </View>

      <View style={styles.pagePadded}>
        <View style={styles.quickGrid}>
          <QuickAction icon="📮" label="Send Parcel" subtitle="Ship a new parcel" onPress={() => navigation.navigate('SendParcel')} tone="blue" />
          <QuickAction icon="🔎" label="Track Parcel" subtitle="Enter tracking ID" onPress={() => navigation.navigate('Track')} tone="orange" />
          <QuickAction icon="📦" label="My Parcels" subtitle="View all your parcels" onPress={() => navigation.navigate('MyParcels')} tone="green" />
          <QuickAction icon="🔔" label="Notifications" subtitle="Updates & alerts" onPress={() => navigation.navigate('Notifications')} tone="red" />
        </View>

        <SectionTitle title="Recent Activity" style={{marginTop: 18, marginBottom: 10}} />
        <Card>
          <ListRow icon="📮" title="CC-2024001" subtitle="In Transit" right="2m ago" tone="orange" />
          <View style={styles.rowDivider} />
          <ListRow icon="✅" title="CC-2024002" subtitle="Delivered" right="10m ago" tone="green" />
          <View style={styles.rowDivider} />
          <ListRow icon="📦" title="CC-2024003" subtitle="Picked Up" right="35m ago" tone="blue" />
        </Card>
      </View>

      <BottomNav navigation={navigation} active="Home" />
    </Shell>
  );
}

export function SendParcelScreen({navigation}) {
  return (
    <Shell>
      <Header navigation={navigation} title="Send Parcel" back />
      <View style={styles.pagePadded}>
        <Card>
          <SectionTitle title="Sender Details" subtitle="Who is sending this parcel?" />
          <Field label="Sender Name" placeholder="Full name" style={{marginTop: 10}} />
          <Field label="Sender Phone" placeholder="Phone number" style={{marginTop: 12}} />
          <Field label="Pickup Address" placeholder="Pickup address" multiline style={{marginTop: 12}} />
        </Card>

        <Card style={{marginTop: 14}}>
          <SectionTitle title="Receiver Details" subtitle="Where should we deliver it?" />
          <Field label="Receiver Name" placeholder="Receiver name" style={{marginTop: 10}} />
          <Field label="Receiver Phone" placeholder="Receiver phone" style={{marginTop: 12}} />
          <Field label="Delivery Address" placeholder="Delivery address" multiline style={{marginTop: 12}} />
        </Card>

        <Card style={{marginTop: 14}}>
          <SectionTitle title="Parcel Details" subtitle="Package info" />
          <View style={styles.dualRow}>
            <Field label="Weight" placeholder="2.5 kg" style={{flex: 1}} />
            <View style={{width: 12}} />
            <Field label="Type" placeholder="Documents" style={{flex: 1}} />
          </View>
          <View style={styles.dualRow}>
            <Field label="Length" placeholder="18 cm" style={{flex: 1, marginTop: 12}} />
            <View style={{width: 12}} />
            <Field label="Width" placeholder="12 cm" style={{flex: 1, marginTop: 12}} />
          </View>
        </Card>

        <Button label="Proceed to Confirm →" onPress={() => navigation.navigate('Confirmation')} style={{marginTop: 16}} />
      </View>
    </Shell>
  );
}

export function ConfirmationScreen({navigation}) {
  return (
    <Shell>
      <Header navigation={navigation} title="Booking Confirmed" back />
      <View style={styles.pagePadded}>
        <Card style={styles.confirmHero}>
          <Text style={styles.confirmCheck}>✅</Text>
          <Text style={styles.confirmTitle}>Parcel Booked!</Text>
          <Text style={styles.confirmSub}>Your tracking ID is</Text>
          <View style={styles.idChip}><Text style={styles.idChipText}>CC-2024-001847</Text></View>
          <View style={styles.qrMock}>
            <Text style={styles.qrIcon}>▦</Text>
            <Text style={styles.qrText}>QR Code</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Status</Text>
            <StatusPill label="Booked" tone="green" />
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Est. Delivery</Text>
            <Text style={styles.statusValue}>2-3 Business Days</Text>
          </View>
        </Card>

        <Button label="Track This Parcel" onPress={() => navigation.navigate('Track')} style={{marginTop: 16}} />
        <Button label="Go to Home" onPress={() => navigation.replace('Home')} type="ghost" style={{marginTop: 10}} />
      </View>
    </Shell>
  );
}

export function TrackParcelScreen({navigation}) {
  return (
    <Shell>
      <Header navigation={navigation} title="Track Parcel" back />
      <View style={styles.pagePadded}>
        <Card>
          <SectionTitle title="Enter Tracking ID" subtitle="Find your parcel instantly" />
          <Field placeholder="Tracking ID" style={{marginTop: 10}} />
          <Button label="Track Now" onPress={() => navigation.navigate('ParcelDetails')} style={{marginTop: 12}} />
        </Card>

        <SectionTitle title="Recent Searches" style={{marginTop: 18, marginBottom: 10}} />
        <Card>
          <ListRow icon="⏱️" title="CC-2024-001847" subtitle="Recently searched" right="›" tone="neutral" />
          <View style={styles.rowDivider} />
          <ListRow icon="⏱️" title="CC-2024-001632" subtitle="Recently searched" right="›" tone="neutral" />
          <View style={styles.rowDivider} />
          <ListRow icon="⏱️" title="CC-2024-001201" subtitle="Recently searched" right="›" tone="neutral" />
        </Card>
      </View>
    </Shell>
  );
}

export function ParcelDetailsScreen({navigation, route}) {
  const parcelId = route?.params?.id ?? 'CC-2024-001847';
  const steps = [
    {title: 'Order Placed', subtitle: 'Mar 25, 9:00 AM', done: true},
    {title: 'Picked Up', subtitle: 'Mar 25, 2:00 PM', done: true},
    {title: 'In Transit', subtitle: 'Mar 26, 8:00 AM', done: true},
    {title: 'Out for Delivery', subtitle: 'Estimated Mar 28', done: false},
    {title: 'Delivered', subtitle: 'Estimated Mar 28', done: false},
  ];

  return (
    <Shell>
      <Header navigation={navigation} title="Parcel Details" back />
      <View style={styles.pagePadded}>
        <Card style={styles.detailHero}>
          <Text style={styles.detailId}>{parcelId}</Text>
          <StatusPill label="In Transit" tone="orange" />
          <Text style={styles.detailRoute}>Mumbai → Bangalore</Text>
        </Card>

        <Card style={{marginTop: 14}}>
          <View style={styles.mapMock}>
            <Text style={styles.mapEmoji}>🗺️</Text>
            <Text style={styles.mapText}>Live Map View</Text>
          </View>
        </Card>

        <SectionTitle title="Delivery Timeline" style={{marginTop: 18, marginBottom: 10}} />
        <Card>
          {steps.map((step, index) => (
            <TimelineItem
              key={step.title}
              title={step.title}
              subtitle={step.subtitle}
              done={step.done}
              last={index === steps.length - 1}
              tone={index === 2 ? 'orange' : 'blue'}
            />
          ))}
        </Card>
      </View>
    </Shell>
  );
}

export function MyParcelsScreen({navigation}) {
  const items = [
    {id: 'CC-2024-001847', route: 'Mumbai → Bangalore', status: 'In Transit', tone: 'orange', icon: '📦'},
    {id: 'CC-2024-001632', route: 'Delhi → Chennai', status: 'Delivered', tone: 'green', icon: '✅'},
    {id: 'CC-2024-001201', route: 'Pune → Hyderabad', status: 'Picked Up', tone: 'blue', icon: '📮'},
    {id: 'CC-2024-000998', route: 'Bangalore → Goa', status: 'Delivered', tone: 'green', icon: '📦'},
  ];

  return (
    <Shell>
      <Header navigation={navigation} title="My Parcels" />
      <View style={styles.pagePadded}>
        <View style={styles.filterRow}>
          <Chip label="All" active />
          <Chip label="Sent" />
          <Chip label="Received" />
          <Chip label="Delivered" />
        </View>
        <View style={{height: 10}} />
        {items.map((item) => (
          <Card key={item.id} style={{marginBottom: 10}}>
            <ListRow icon={item.icon} title={item.id} subtitle={item.route} right={item.status} tone={item.tone} />
          </Card>
        ))}
      </View>
      <BottomNav navigation={navigation} active="MyParcels" />
    </Shell>
  );
}

export function NotificationsScreen({navigation}) {
  const data = [
    {icon: '🚚', title: 'Parcel In Transit', subtitle: 'CC-2024-001847 is on its way to Bangalore', time: '2 min ago'},
    {icon: '📦', title: 'Parcel Picked Up', subtitle: 'Your parcel CC-2024-001201 has been picked up', time: '1 hr ago'},
    {icon: '✅', title: 'Parcel Delivered', subtitle: 'CC-2024-001632 was delivered successfully', time: 'Yesterday'},
    {icon: '🎁', title: 'Booking Confirmed', subtitle: 'Your parcel CC-2024-000998 is booked', time: '2 days ago'},
  ];

  return (
    <Shell>
      <Header navigation={navigation} title="Notifications" />
      <View style={styles.pagePadded}>
        <Card>
          {data.map((item, index) => (
            <React.Fragment key={item.title}>
              <View style={styles.notificationRow}>
                <View style={styles.notificationBar} />
                <View style={styles.notificationIcon}><Text>{item.icon}</Text></View>
                <View style={{flex: 1}}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.listSubtitle}>{item.subtitle}</Text>
                </View>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              {index !== data.length - 1 ? <View style={styles.rowDivider} /> : null}
            </React.Fragment>
          ))}
        </Card>
      </View>
      <BottomNav navigation={navigation} active="Notifications" />
    </Shell>
  );
}

export function ProfileScreen({navigation}) {
  const rows = [
    {icon: '📱', title: 'Phone', subtitle: '+91 98765 43210'},
    {icon: '📍', title: 'Location', subtitle: 'Bangalore, KA'},
    {icon: '📦', title: 'Total Parcels', subtitle: '24 shipments'},
    {icon: '⚙️', title: 'Settings', subtitle: 'App preferences'},
    {icon: '🔒', title: 'Privacy', subtitle: 'Manage data'},
  ];

  return (
    <Shell>
      <View style={styles.profileHero}>
        <Header navigation={navigation} title="Profile" />
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
      </View>
      <View style={styles.pagePadded}>
        <View style={styles.profileNameWrap}>
          <Text style={styles.profileName}>Skanda Kumar</Text>
          <Text style={styles.profileEmail}>mkskanda@gmail.com</Text>
        </View>

        {rows.map((row) => (
          <Card key={row.title} style={{marginBottom: 10, paddingVertical: 10}}>
            <ListRow icon={row.icon} title={row.title} subtitle={row.subtitle} tone="neutral" />
          </Card>
        ))}

        <Button label="Logout" onPress={() => navigation.replace('Login')} type="ghost" style={styles.logoutBtn} textStyle={{color: C.red}} />
      </View>
      <BottomNav navigation={navigation} active="Profile" />
    </Shell>
  );
}

export function AdminLoginScreen({navigation}) {
  return (
    <Shell dark scroll={false}>
      <View style={styles.adminLoginWrap}>
        <Text style={styles.adminEmoji}>🛡️</Text>
        <Text style={styles.adminPortal}>Admin Portal</Text>
        <Text style={styles.adminPortalSub}>CourierConnect Management</Text>

        <Card dark style={styles.adminLoginCard}>
          <Field dark label="Admin ID" placeholder="Enter admin ID" />
          <Field dark label="Password" placeholder="Enter password" secureTextEntry style={{marginTop: 12}} />
          <Button label="Admin Login" onPress={() => navigation.replace('AdminDashboard')} style={{marginTop: 14}} />
          <Text style={styles.secureNote}>🔒 Secure Admin Access Only</Text>
        </Card>
      </View>
    </Shell>
  );
}

export function AdminDashboardScreen({navigation}) {
  return (
    <Shell dark>
      <View style={styles.adminTop}>
        <Text style={styles.adminTitle}>🚨 Admin Dashboard</Text>
        <Text style={styles.adminDate}>Today: Mar 27, 2024</Text>
      </View>
      <View style={styles.adminBody}>
        <View style={styles.metricGrid}>
          <MetricCard value="1,284" label="Total Parcels" icon="📦" />
          <MetricCard value="986" label="Delivered" icon="✅" tone="green" />
          <MetricCard value="189" label="In Transit" icon="🚚" tone="orange" />
          <MetricCard value="109" label="Pending" icon="⏳" tone="red" />
        </View>

        <SectionTitle title="Quick Actions" dark style={{marginTop: 20, marginBottom: 10}} />
        <View style={styles.quickGrid3}>
          <QuickAction icon="📦" label="View All Parcels" subtitle="Open parcel list" onPress={() => navigation.navigate('ParcelList')} />
          <QuickAction icon="📷" label="Scan QR Code" subtitle="Open scanner" onPress={() => navigation.navigate('QRScanner')} tone="orange" />
          <QuickAction icon="🛠️" label="Update Status" subtitle="Change parcel state" onPress={() => navigation.navigate('UpdateStatus')} tone="green" />
        </View>

        <SectionTitle title="Recent Activity" dark style={{marginTop: 20, marginBottom: 10}} />
        <Card dark>
          <ListRow icon="📮" title="CC-2024-001847" subtitle="In transit" right="2m ago" tone="orange" />
          <View style={styles.rowDividerDark} />
          <ListRow icon="✅" title="CC-2024-001632" subtitle="Delivered" right="1h ago" tone="green" />
          <View style={styles.rowDividerDark} />
          <ListRow icon="📦" title="CC-2024-001201" subtitle="Picked up" right="3h ago" tone="blue" />
        </Card>
      </View>
    </Shell>
  );
}

export function ParcelListScreen({navigation}) {
  const items = [
    {id: 'CC-2024-001847', route: 'Mumbai → Bangalore', status: 'In Transit', tone: 'orange'},
    {id: 'CC-2024-001846', route: 'Delhi → Chennai', status: 'Delivered', tone: 'green'},
    {id: 'CC-2024-001845', route: 'Pune → Hyderabad', status: 'Picked Up', tone: 'blue'},
    {id: 'CC-2024-001844', route: 'Kolkata → Goa', status: 'Pending', tone: 'red'},
    {id: 'CC-2024-001843', route: 'Chennai → Goa', status: 'Delivered', tone: 'green'},
  ];

  return (
    <Shell>
      <Header navigation={navigation} title="All Parcels" back />
      <View style={styles.pagePadded}>
        <Card>
          <Field placeholder="Search parcel or ID.." />
          <View style={styles.filterRow}>
            <Chip label="All" active />
            <Chip label="Transit" />
            <Chip label="Delivered" />
            <Chip label="Pending" />
          </View>
        </Card>
        <View style={{height: 12}} />
        {items.map((item) => (
          <Card key={item.id} style={{marginBottom: 10}}>
            <Pressable onPress={() => navigation.navigate('AdminParcelDetails')}>
              <ListRow icon="📦" title={item.id} subtitle={item.route} right={item.status} tone={item.tone} />
            </Pressable>
          </Card>
        ))}
      </View>
    </Shell>
  );
}

export function AdminParcelDetailsScreen({navigation}) {
  return (
    <Shell>
      <Header navigation={navigation} title="Parcel Details" back />
      <View style={styles.pagePadded}>
        <Card style={styles.detailHero}>
          <Text style={styles.detailId}>CC-2024-001847</Text>
          <StatusPill label="In Transit" tone="orange" />
          <Text style={styles.detailRoute}>Mumbai → Bangalore</Text>
        </Card>

        <View style={{marginTop: 14}}>
          <Card>
            <SectionTitle title="Sender" subtitle="Ravi Kumar" />
            <Text style={styles.cardInfoText}>+91 98765 43210</Text>
            <Text style={styles.cardInfoText}>12 MG Road, Mumbai</Text>
          </Card>
          <Card style={{marginTop: 10}}>
            <SectionTitle title="Receiver" subtitle="Skanda Kumar" />
            <Text style={styles.cardInfoText}>+91 87654 32101</Text>
            <Text style={styles.cardInfoText}>5 Residency Rd, Bangalore</Text>
          </Card>
          <Card style={{marginTop: 10}}>
            <SectionTitle title="Parcel" subtitle="Weight: 2.5 kg" />
            <Text style={styles.cardInfoText}>Type: Documents</Text>
            <Text style={styles.cardInfoText}>Booked: Mar 25, 9:00 AM</Text>
          </Card>
        </View>

        <Button label="Update Parcel Status" onPress={() => navigation.navigate('UpdateStatus')} style={{marginTop: 16}} icon="✏️" />
      </View>
    </Shell>
  );
}

export function UpdateStatusScreen({navigation}) {
  const statuses = [
    {icon: '📦', label: 'Picked Up', subtitle: 'Parcel collected from sender'},
    {icon: '🚚', label: 'In Transit', subtitle: 'Parcel is on the way', active: true},
    {icon: '🏠', label: 'Out for Delivery', subtitle: 'Parcel is near destination'},
    {icon: '✅', label: 'Delivered', subtitle: 'Parcel delivered to receiver'},
    {icon: '❌', label: 'Failed Delivery', subtitle: 'Delivery attempt failed'},
  ];

  return (
    <Shell>
      <Header navigation={navigation} title="Update Status" back />
      <View style={styles.pagePadded}>
        <Text style={styles.adminSmallTitle}>CC-2024-001847</Text>
        <Text style={styles.adminTinyText}>Current: In Transit</Text>
        <SectionTitle title="Select New Status" style={{marginTop: 16, marginBottom: 10}} />
        {statuses.map((status) => (
          <View key={status.label} style={[styles.statusOption, status.active && styles.statusOptionActive]}>
            <Text style={styles.statusOptionIcon}>{status.icon}</Text>
            <View style={{flex: 1}}>
              <Text style={styles.listTitle}>{status.label}</Text>
              <Text style={styles.listSubtitle}>{status.subtitle}</Text>
            </View>
            {status.active ? <Text style={styles.checkMark}>✓</Text> : null}
          </View>
        ))}
        <Field label="Update Location (optional)" placeholder="Enter current location" style={{marginTop: 14}} />
        <Button label="Save Status Update" onPress={() => navigation.goBack()} style={{marginTop: 16}} />
      </View>
    </Shell>
  );
}

export function QRScannerScreen({navigation}) {
  return (
    <Shell dark>
      <Header navigation={navigation} title="Scan QR Code" back dark />
      <View style={styles.scannerWrap}>
        <View style={styles.scannerFrame}>
          <View style={styles.scannerCornerTL} />
          <View style={styles.scannerCornerTR} />
          <View style={styles.scannerCornerBL} />
          <View style={styles.scannerCornerBR} />
          <View style={styles.scannerMid} />
        </View>
        <Text style={styles.scannerHint}>Align QR code within the frame</Text>

        <Card dark style={styles.lastScanCard}>
          <Text style={styles.lastScanLabel}>Last Scanned</Text>
          <Text style={styles.lastScanId}>CC-2024-001847</Text>
          <Text style={styles.lastScanMeta}>🚚 In Transit  •  Mumbai → Bangalore</Text>
          <Button label="View Parcel Details" onPress={() => navigation.navigate('AdminParcelDetails')} style={{marginTop: 12}} />
        </Card>
      </View>
    </Shell>
  );
}

export const Screens = {
  SplashScreen,
  LoginScreen,
  SignupScreen,
  HomeScreen,
  SendParcelScreen,
  ConfirmationScreen,
  TrackParcelScreen,
  ParcelDetailsScreen,
  MyParcelsScreen,
  NotificationsScreen,
  ProfileScreen,
  AdminLoginScreen,
  AdminDashboardScreen,
  ParcelListScreen,
  AdminParcelDetailsScreen,
  UpdateStatusScreen,
  QRScannerScreen,
};

const styles = StyleSheet.create({
  headerRow: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
  headerLeft: {flexDirection: 'row', alignItems: 'center', gap: 10},
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  backText: {color: C.white, fontSize: 25, lineHeight: 28, marginTop: -3},
  heroTitle: {fontSize: 24, color: C.text, fontWeight: '800'},
  heroSubtitle: {marginTop: 4, fontSize: 12, color: C.muted},
  pagePadded: {paddingHorizontal: 18, paddingTop: 14},
  authTop: {paddingHorizontal: 18, paddingTop: 18, paddingBottom: 16},
  authCardWrap: {paddingHorizontal: 18, paddingBottom: 20},
  authCard: {padding: 16},
  forgotWrap: {alignSelf: 'flex-end', marginTop: 8},
  forgotText: {fontSize: 11, color: C.primary, fontWeight: '600'},
  footerLinkWrap: {alignItems: 'center', marginTop: 12},
  footerLink: {fontSize: 11, color: '#8B92A6'},
  adminPortalLink: {alignItems: 'center', marginTop: 8},
  adminPortalText: {color: '#D5E4FF', fontSize: 11, fontWeight: '600'},

  splashCenter: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20},
  splashLogoOuter: {width: 112, height: 112, borderRadius: 56, backgroundColor: '#2456C9', alignItems: 'center', justifyContent: 'center'},
  splashLogoInner: {width: 90, height: 90, borderRadius: 45, backgroundColor: '#1E49AF', alignItems: 'center', justifyContent: 'center'},
  splashEmoji: {fontSize: 36},
  splashTitle: {marginTop: 18, color: C.white, fontSize: 24, fontWeight: '800'},
  splashSub: {marginTop: 6, color: 'rgba(255,255,255,0.78)', fontSize: 12},
  splashDot: {width: 24, height: 4, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.9)', marginTop: 100},
  splashCta: {marginTop: 24, backgroundColor: 'rgba(255,255,255,0.16)', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 12},
  splashCtaText: {color: C.white, fontWeight: '700'},

  homeHero: {backgroundColor: C.primary, paddingHorizontal: 18, paddingTop: 16, paddingBottom: 18, borderBottomLeftRadius: 28, borderBottomRightRadius: 28},
  heroTopRow: {marginBottom: 14},
  homeGreeting: {color: C.white, fontSize: 22, fontWeight: '800'},
  homeSub: {color: 'rgba(255,255,255,0.84)', fontSize: 12, marginTop: 4},
  statsRow: {flexDirection: 'row', gap: 8},
  statBubble: {flex: 1, backgroundColor: '#234DBA', borderRadius: 14, paddingVertical: 10, alignItems: 'center'},
  statNum: {color: C.white, fontSize: 16, fontWeight: '800'},
  statTxt: {color: 'rgba(255,255,255,0.8)', fontSize: 10, marginTop: 2},
  quickGrid: {flexDirection: 'row', flexWrap: 'wrap', gap: 10},
  quickGrid3: {flexDirection: 'row', gap: 10},
  quickAction: {width: '48%', backgroundColor: C.white, borderRadius: 16, borderWidth: 1, borderColor: C.border, padding: 12},
  quickIcon: {width: 34, height: 34, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 8},
  quickIconText: {fontSize: 16},
  quickActionLabel: {color: C.text, fontWeight: '700', fontSize: 12},
  quickActionSub: {color: C.muted, fontSize: 10, marginTop: 2},
  rowDivider: {height: 1, backgroundColor: C.border, marginVertical: 8},
  rowDividerDark: {height: 1, backgroundColor: C.darkLine, marginVertical: 8},

  filterRow: {flexDirection: 'row', gap: 8, flexWrap: 'wrap'},
  chip: {paddingHorizontal: 13, paddingVertical: 8, borderRadius: 14, borderWidth: 1},
  chipText: {fontSize: 11, fontWeight: '700'},
  pill: {alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999, marginTop: 8},
  pillText: {fontSize: 11, fontWeight: '700'},
  bottomNavWrap: {paddingHorizontal: 18, paddingBottom: 12},
  bottomNav: {backgroundColor: C.white, borderRadius: 18, borderWidth: 1, borderColor: C.border, flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10},
  bottomNavItem: {alignItems: 'center', justifyContent: 'center', flex: 1},
  bottomNavIcon: {fontSize: 16},
  bottomNavLabel: {fontSize: 10, marginTop: 3, fontWeight: '600'},

  confirmHero: {alignItems: 'center', paddingVertical: 18},
  confirmCheck: {fontSize: 34},
  confirmTitle: {marginTop: 10, color: C.text, fontSize: 20, fontWeight: '800'},
  confirmSub: {marginTop: 4, color: C.muted, fontSize: 12},
  idChip: {marginTop: 12, backgroundColor: C.primarySoft, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14},
  idChipText: {color: C.primary, fontWeight: '800'},
  qrMock: {width: 110, height: 110, borderRadius: 12, backgroundColor: '#E7EAF3', alignItems: 'center', justifyContent: 'center', marginTop: 14},
  qrIcon: {fontSize: 30, color: '#9CA3B9'},
  qrText: {marginTop: 8, fontSize: 12, color: '#8C93A7'},
  statusRow: {width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12},
  statusLabel: {fontSize: 12, color: C.muted, fontWeight: '600'},
  statusValue: {fontSize: 12, color: C.text, fontWeight: '700'},

  detailHero: {backgroundColor: C.primary, borderColor: C.primary, padding: 14},
  detailId: {color: C.white, fontSize: 18, fontWeight: '800'},
  detailRoute: {color: 'rgba(255,255,255,0.85)', fontSize: 12, marginTop: 8},
  mapMock: {height: 140, borderRadius: 18, backgroundColor: '#E8EDF7', alignItems: 'center', justifyContent: 'center'},
  mapEmoji: {fontSize: 28},
  mapText: {marginTop: 8, color: '#8B93A7', fontSize: 12},
  timelineItem: {flexDirection: 'row'},
  timelineCol: {width: 18, alignItems: 'center'},
  timelineDot: {width: 12, height: 12, borderRadius: 6, marginTop: 5},
  timelineLine: {width: 2, flex: 1, backgroundColor: C.line, marginTop: 4},
  timelineTitle: {fontSize: 12, color: C.text, fontWeight: '700'},
  timelineSubtitle: {fontSize: 11, color: C.muted, marginTop: 2},
  dualRow: {flexDirection: 'row', alignItems: 'flex-end'},

  notificationRow: {flexDirection: 'row', alignItems: 'center', paddingVertical: 12},
  notificationBar: {width: 3, height: 52, borderRadius: 3, backgroundColor: C.primary, marginRight: 10},
  notificationIcon: {width: 34, height: 34, borderRadius: 17, backgroundColor: C.softBlue, alignItems: 'center', justifyContent: 'center', marginRight: 10},
  timeText: {fontSize: 10, color: C.muted},

  profileHero: {backgroundColor: C.primary, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, paddingBottom: 22},
  avatarWrap: {width: 72, height: 72, borderRadius: 36, backgroundColor: C.white, alignSelf: 'center', marginTop: 8, alignItems: 'center', justifyContent: 'center'},
  avatarText: {fontSize: 34},
  profileNameWrap: {alignItems: 'center', marginBottom: 14},
  profileName: {fontSize: 18, color: C.text, fontWeight: '800'},
  profileEmail: {fontSize: 12, color: C.muted, marginTop: 4},
  logoutBtn: {backgroundColor: C.softRed, borderColor: '#F9C5C5', marginTop: 8},

  cardInfoText: {fontSize: 12, color: C.muted, marginTop: 6},

  adminLoginWrap: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20},
  adminEmoji: {fontSize: 26, marginBottom: 14},
  adminPortal: {color: C.white, fontSize: 24, fontWeight: '800'},
  adminPortalSub: {color: 'rgba(255,255,255,0.55)', fontSize: 12, marginTop: 6, marginBottom: 16},
  adminLoginCard: {width: '100%'},
  secureNote: {textAlign: 'center', marginTop: 10, fontSize: 11, color: 'rgba(255,255,255,0.65)'},

  adminTop: {backgroundColor: C.dark, paddingHorizontal: 18, paddingTop: 18, paddingBottom: 18},
  adminTitle: {color: C.white, fontSize: 16, fontWeight: '800'},
  adminDate: {color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 4},
  adminBody: {paddingHorizontal: 18, paddingTop: 14, paddingBottom: 12},
  metricGrid: {flexDirection: 'row', flexWrap: 'wrap', gap: 10},
  metricCard: {width: '48%', backgroundColor: C.white, borderRadius: 16, borderWidth: 1, borderColor: C.border, padding: 12},
  metricIcon: {width: 28, height: 28, borderRadius: 10, alignItems: 'center', justifyContent: 'center'},
  metricValue: {marginTop: 10, color: C.primary, fontSize: 18, fontWeight: '800'},
  metricLabel: {fontSize: 11, color: C.muted, marginTop: 2},
  adminSmallTitle: {fontSize: 17, fontWeight: '800', color: C.text},
  adminTinyText: {fontSize: 11, color: C.muted, marginTop: 4},
  statusOption: {flexDirection: 'row', alignItems: 'center', backgroundColor: C.white, borderWidth: 1, borderColor: C.border, borderRadius: 16, padding: 12, marginBottom: 10},
  statusOptionActive: {borderColor: C.primary, backgroundColor: C.primarySoft},
  statusOptionIcon: {fontSize: 18, marginRight: 10},
  checkMark: {width: 22, height: 22, borderRadius: 11, backgroundColor: C.primary, color: C.white, textAlign: 'center', textAlignVertical: 'center', overflow: 'hidden', fontWeight: '800'},
  scannerWrap: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18},
  scannerFrame: {width: 210, height: 210, backgroundColor: '#182043', alignItems: 'center', justifyContent: 'center', borderRadius: 14, overflow: 'hidden'},
  scannerCornerTL: {position: 'absolute', top: 18, left: 18, width: 22, height: 22, borderLeftWidth: 3, borderTopWidth: 3, borderColor: '#4F83FF'},
  scannerCornerTR: {position: 'absolute', top: 18, right: 18, width: 22, height: 22, borderRightWidth: 3, borderTopWidth: 3, borderColor: '#4F83FF'},
  scannerCornerBL: {position: 'absolute', bottom: 18, left: 18, width: 22, height: 22, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: '#4F83FF'},
  scannerCornerBR: {position: 'absolute', bottom: 18, right: 18, width: 22, height: 22, borderRightWidth: 3, borderBottomWidth: 3, borderColor: '#4F83FF'},
  scannerMid: {position: 'absolute', top: '50%', left: 0, right: 0, height: 4, backgroundColor: 'rgba(79,131,255,0.25)'},
  scannerHint: {color: 'rgba(255,255,255,0.65)', fontSize: 12, marginTop: 14, marginBottom: 18},
  lastScanCard: {width: '100%'},
  lastScanLabel: {color: 'rgba(255,255,255,0.55)', fontSize: 11},
  lastScanId: {color: C.white, fontSize: 18, fontWeight: '800', marginTop: 6},
  lastScanMeta: {color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 4},
  sectionSubtitle: {fontSize: 11, color: C.muted, marginTop: 4},
  listRow: {flexDirection: 'row', alignItems: 'center'},
  listIcon: {width: 32, height: 32, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 10},
  listIconText: {fontSize: 14},
  listTitle: {fontSize: 12, color: C.text, fontWeight: '700'},
  listSubtitle: {fontSize: 11, color: C.muted, marginTop: 2},
  listRight: {fontSize: 11, color: C.muted, fontWeight: '700'},
});

