此插件主要为了前端小伙伴在编写页面时能更加真实的模拟仿真数据而提供的js插件库，内置了dayjs插件，支持人名、身份证号码、手机号、住址、随机数、主键id、随机日期等多种数据的模拟

### 1.下载

```
$npm install imitatejs
```

### 2.引入

```js
import { imitatejs } from 'imitatejs'//在项目入口文件引入
```

### 3.使用

#### 批量生成数据

```js
    let peopleData = Array(10).fill('').map(() => {
        return {
            id: imitatejs().randomStr(),
            idCard: imitatejs().idCard(),
            name: imitatejs().fullName(),
            score: imitatejs().randomIntNum(100),
            address: imitatejs().address('p-C-c'),
            text: imitatejs().str(300),
            phone: imitatejs().phone()
        }
    })
    console.log(peopleData)
	//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```



#### 生成随机中文人名

#### fullName( )

```js
let name = imitatejs().fullName()
consloe.log(name)//王刚
```



#### 生成随机不重复字符

#### randomStr( )

```js
let id = imitatejs().randomStr()//
consloe.log(id)//"krl1qv1m4ed"
```



#### 生成生成随机整数

#### randomIntNum( max: Number )

```js
let num1 = imitatejs().randomIntNum()
let num2 = imitatejs().randomIntNum(100)
consloe.log(num1)//4584
consloe.log(num2)//55
```



#### 生成随机身份证号码

#### idCard( )

```js
let idCard = imitatejs().idCard()
consloe.log(name)//"420101198101010695"
```



#### 生成随机手机号

#### phone( )

```js
let phone = imitatejs().phone()
consloe.log(name)//"15156448716"
```



#### 生成随机测试文字

#### str( max: Number )

```js
let phone = imitatejs().str(10)
consloe.log(name)//"测试测试"
```



#### 生成随机地址

#### address( format: String )

| 字符 | 英文释义       | 中文释义   |
| ---- | -------------- | ---------- |
| p    | province       | 省         |
| C    | city           | 市         |
| c    | county         | 区县       |
| s    | street         | 街道       |
| v    | village        | 小区、村庄 |
| d    | detail address | 详细住址   |



```js
let adr1 = imitatejs().address()
let adr2 = imitatejs().address('p-C-c')
consloe.log(adr1)//青海省西宁市城西区金银街紫云山庄2栋13单元
consloe.log(adr2)//山西省-大同市-新荣区
```