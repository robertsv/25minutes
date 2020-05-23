# 25minutes
This is a source of 25minut.es

[![Analytics](https://ga-beacon.appspot.com/UA-54543878-3/robertsv/25minutes)]()

## About
25minutes is a simple yet very powerful time tracking tool.

Built with Angular 8 and Bootstrap 4.4. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build --prod --output-path docs --base-href https://25minut.es --verbose=true` to build the project.

The build artifacts will be stored in the `docs/` directory.

## Tests

Run `ng test` to run all unit tests.

Run `ng test --include=src/app/shared/data.service.spec.ts` to run individual test (`data.service.spec.ts`).

## Notes

```
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
ng generate pipe shared/minutes-seconds
```

* Sound: https://www.zapsplat.com
* Favicon: https://www.favicon-generator.org
