module.exports = {
  displayName: 'morteza-jamali-blog-types',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/packages/morteza-jamali/blog/types',
};
