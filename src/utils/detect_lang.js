import { LanguageDetector, FilesetResolver } from "@mediapipe/tasks-text";

let detectorInstance;

const createLanguageDetector = async () => {
    const text = await FilesetResolver.forTextTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text@latest/wasm');
    let modelPath = import.meta.env.MODE === 'production' ? import.meta.env.VITE_APP_MODEL_PATH : import.meta.env.VITE_REACT_APP_MODEL_PATH 
    console.log(modelPath);
    detectorInstance = await LanguageDetector.createFromOptions(text, {
        baseOptions: {
            modelAssetPath: `${modelPath}`,
        },
        maxResults: 1,
    });

    return detectorInstance;
}

export const languageDetect = async (text) => {
    const languageDetector = await createLanguageDetector();
    const results = languageDetector.detect(text);

    return results;
}