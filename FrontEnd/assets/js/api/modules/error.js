const fileExtension = ["jpg", "png"];

// Fonction pour extraire le nom et l'extension d'un fichier image
export async function fileExtensionVerificator(filePath) {
    
    const segments = filePath.split('/');
    const fileNameWithExtension = segments[segments.length - 1];

    const [fileName, extension] = fileNameWithExtension.split('.');

    return {
        name: fileName,
        extension: extension
    };
}

const filePath = 'C:/Users/aurel/Pictures/50832720.jpg';
const fileInfo = fileExtensionVerificator(filePath);
console.log('Nom du fichier:', fileInfo.name);
console.log('Extension du fichier:', fileInfo.extension);