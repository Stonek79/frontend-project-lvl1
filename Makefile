install:
	npm install

start:
	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-gcd.js
	node bin/brain-progression.js
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
