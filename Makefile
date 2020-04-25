install:
	npm install

start:
	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
