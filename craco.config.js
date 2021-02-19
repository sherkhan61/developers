const path = require('path')


module.exports = {
    webpack: {
        alias: {
            '@store' : path.resolve(__dirname, 'src/lib/store'),
            '@pages' : path.resolve(__dirname, 'src/pages'),
            '@api' : path.resolve(__dirname, 'src/api'),
            '@socialApi' : path.resolve(__dirname, 'src/api/socialApi'),
            '@newsApi' : path.resolve(__dirname, 'src/api/newsApi'),
            '@musicApi' : path.resolve(__dirname, 'src/api/musicApi'),
            '@utils' : path.resolve(__dirname, 'src/utils'),
            '@profile' : path.resolve(__dirname, 'src/features/profile'),
            '@users' : path.resolve(__dirname, 'src/features/users'),
            '@dialogs' : path.resolve(__dirname, 'src/features/dialogs'),
            '@news' : path.resolve(__dirname, 'src/features/news'),
            '@music' : path.resolve(__dirname, 'src/features/music'),
            '@auth' : path.resolve(__dirname, 'src/features/authentication'),
            '@ui' : path.resolve(__dirname, 'src/ui'),
            '@images' : path.resolve(__dirname, 'src/ui/images')
        }
    }
}

