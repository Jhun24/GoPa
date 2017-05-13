# GoPa

# Schema
## Schema :  driver
> id : 라이더의 id입니다

> password : 라이더의 password입니다

> dirverId : 라이더의 토큰입니다

> userLocation : 문자열로 된 user 위치입니다

> userXLocation : 사용자의 X 좌표입니다

> userYLocation : 사용자의 Y 좌표입니다

> driverXLocation : 라이더의 X 좌표입니다

> driverYLocation : 라이더의 Y 좌표입니다


# GET : 

## /page/:riderId

### Require
> 받는 데이터가 없습니다

### Response
> page.html

## /user/token
### Require
> 받는 데이터가 없습니다
### Response
> root 계정의 토큰을 리턴합니다

## /rider/:riderId
### Require
> 라이더의 토큰을 받습니다

### Response
> data["driverX"] : 라이더의 X좌표

> data["driverY"] : 라이더의 Y좌표

> data["userX"] : 유저의 X좌표

> data["userY"] : 유저의 Y좌표

# POST :

## /rider/start
### Require
> address : 사용자의 문자열 주소

> userXLocation : 사용자의 X 좌표

> userYLocation : 사용자의 Y 좌표

> driverXLocation : 라이더의 X 좌표

> driverYLocation : 라이더의 Y 좌표

> driverId : 라이더의 토큰

### Response
> url : 라이더의 위치를 확인 할 수 있는 페이지의 URL

## /rider/location
### Require
> driverId : 라이더의 토큰

> driverXLocation : 라이더의 X 좌표

> driverYLocation : 라이더의 Y 좌표

### Response
> 반환값은 없습니다