import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import AdBanner from '../../components/AdBanner';

const PrivacyPolicyScreen = ({ navigation }) => {
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
                    <Text style={[styles.headerTitle, { color: colors.text }]}>Privacy Policy</Text>
                    <View style={{ width: 32 }} />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={[styles.title, { color: colors.primary }]}>AI Career Coach – Privacy Policy</Text>
                    <Text style={[styles.intro, { color: colors.textSecondary }]}>Your privacy is important to us.</Text>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>What data we collect</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Name, email, and basic profile details</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Uploaded resume (DOC)</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Extracted resume text (skills, experience)</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Study progress, exam scores, and app usage data</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>How we use your data</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Analyze your resume using AI</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Recommend job roles and missing skills</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Generate study plans and practice questions</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Track your learning progress</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>AI usage</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• AI is used only to analyze and generate suggestions</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Your data is NOT used to train any AI model</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• AI results are for guidance purposes only</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Data storage & security</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Resume files are stored securely</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• User data is protected and not shared publicly</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Ads & third parties</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• The app may show ads</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• Ads do not access your resume or personal content</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• We do not sell your personal data</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Data deletion</Text>
                        <Text style={[styles.text, { color: colors.text }]}>• You can request account and data deletion from the Profile section.</Text>
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

export default PrivacyPolicyScreen;
