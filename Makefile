NPM := npm

all: setup-frontend setup-backend

setup-frontend:
	cd Frontend && $(NPM) install &

setup-backend:
	cd Backend && $(NPM) install

run: run-frontend run-backend

run-frontend:
	cd Frontend && $(NPM) run dev &
	
run-backend:
	cd Backend && $(NPM) run start:dev
