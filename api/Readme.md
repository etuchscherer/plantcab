# Plantcab API

## System Manager

The system manager maintains the cache for the api. Everything is volitile. Upon creation, the system manager instansiates a `main_board`, for the attached device. You can add boards for other devices. Each board is a singleton.

During system startup, the api reads the configuration, and creates the appropriate hardware abstractions, saving them to System Manager's cache under the format `<board>-<equipment-name>`.

For example::

```
SystemManage.set('main_board-main-overhead-light');
```

### Configuring Equipment

To set the equipment

## Tests

Run tests with Jest

```
npm test
```
