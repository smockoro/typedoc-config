#!/user/bin/env zx

const filePath = './package.json'

const packageJson = fs.readFileSync(filePath, { encoding: 'utf-8' })
const beforeName = JSON.parse(packageJson).name
echo`current package name (and scope name) is ${beforeName}`
const before = beforeName.split('/')[0]

let after = ''

if (before === '@smockoro') {
  after = '@aws'
}

if (before === '@aws') {
  after = '@smockoro'
}

if (after === '') {
  after = argv.after
}

echo`now, scope rename to ${after} from ${before}`

await $`sed -i -e s/${before}/${after}/g ${filePath}`

echo`completed!!`
