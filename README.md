# Static Simple Express Server

Simple sever for static content.

```
npm install
```

## Serve forever using pm2

Install
```
[sudo] npm install pm2 -g
```

List all running processes:
```
pm2 list
```

Stop an app:
```
pm2 stop 0
```

Restart an app:
```
 pm2 restart 0
```

To view detailed information about an app:
```
pm2 show 0
```

To remove an app from PM2’s registry:
```
pm2 delete 0
```
