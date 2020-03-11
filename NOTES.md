ng new --commit=false --directory=.  twenty-five-minutes
npm install --save @fortawesome/fontawesome-free@5.1.0-9
npm install --save bootstrap@4.4.1
npm install --save jquery@3.4.1
npm install --save-dev @types/jquery@3.x
npm install --save-dev @types/bootstrap@4.x

ng generate component timer
ng generate component task-manager
ng generate component task-list
ng generate service shared/data
ng generate service shared/notification
ng generate service shared/storage
ng generate directive shared/min-validator
ng generate directive shared/max-validator
