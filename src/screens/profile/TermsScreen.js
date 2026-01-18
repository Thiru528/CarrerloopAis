import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import AdBanner from '../../components/AdBanner';

const TermsScreen = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'left', 'right', 'bottom']}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
                showsVerticalScrollIndicator={true}
                bounces={true}
            >
                {/* Header inside ScrollView */}
                <View style={[styles.header, { borderBottomColor: colors.border }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { color: colors.text }]}>Terms & Conditions</Text>
                    <View style={{ width: 32 }} />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={[styles.title, { color: colors.primary }]}>AI Career Coach – Terms & Conditions</Text>
                    <Text style={[styles.intro, { color: colors.textSecondary }]}>By using this app, you agree to the following terms.</Text>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>App usage</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Use the app only for lawful purposes</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Do not misuse AI-generated content</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Provide accurate information</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>AI disclaimer</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• AI suggestions are not guarantees</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• We do not promise job placement or employment</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Career decisions are the user’s responsibility</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Account responsibility</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• You are responsible for keeping your account secure</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Ads & premium features</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• The app may display ads</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Some features may require payment</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Payments are handled securely</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Limitation of liability</Text>
                        <Text style={[styles.text, { color: colors.text }]}>We are not responsible for:</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• AI inaccuracies</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Job outcomes</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Third-party service issues</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Updates</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• These terms may change as the app improves.</Text>
                    </View>
                </View>

                {/* Ad Banner at the bottom of content */}
                <View style={{ marginTop: 20 }}>
                    <AdBanner />
                </View>

                {/* Extra spacer */}
                <View style={{ height: 150 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12, // Reduced
        paddingVertical: 8,    // Reduced
        borderBottomWidth: 1,
    },
    backButton: { padding: 4 },
    headerTitle: { fontSize: 14, fontWeight: '600' }, // Reduced
    content: { padding: 12 }, // Reduced
    title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 }, // Reduced
    intro: { fontSize: 11, marginBottom: 12, fontStyle: 'italic' }, // Reduced
    section: { marginBottom: 12 }, // Reduced
    sectionTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 2 }, // Reduced
    text: { fontSize: 10, lineHeight: 14, marginBottom: 2 }, // Reduced
});

export default TermsScreen;
