import { ExpoConfig, ConfigContext } from 'expo/config';

const APP_ENV = process.env.APP_ENV;
const IS_DEV = APP_ENV === 'development';
const IS_PREVIEW = APP_ENV === 'preview';

const getAppMetadata = () => {
    if (IS_DEV) {
        return {
            name: 'Expo EAS (Dev)',
            iosBundleIdentifier: 'com.augustcasse.ecv-expo-course-eas-dev',
            androidPackage: 'com.augustcasse.ecv_expo_course_eas_dev',
        };
    }

    if (IS_PREVIEW) {
        return {
            name: 'Expo EAS (Preview)',
            iosBundleIdentifier: 'com.augustcasse.ecv-expo-course-eas-preview',
            androidPackage: 'com.augustcasse.ecv_expo_course_eas_preview',
        };
    }

    return {
        name: 'Expo EAS',
        iosBundleIdentifier: 'com.augustcasse.ecv-expo-course-eas',
        androidPackage: 'com.augustcasse.ecv_expo_course_eas',
    };
};

export default ({ config }: ConfigContext): ExpoConfig => {
    const { name, iosBundleIdentifier, androidPackage } = getAppMetadata();

    return {
        ...config,
        name,
        ios: {
            ...config.ios,
            bundleIdentifier: iosBundleIdentifier,
            /*** ADD THOS LINES ***/
            config: {
                usesNonExemptEncryption: false
            }
            /*** ADD THOS LINES ***/
        },
        android: {
            ...config.android,
            package: androidPackage,
        },
    } as ExpoConfig;
};



