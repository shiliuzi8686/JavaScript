const {log} = console
const CLOTHES_CLASSIFICATION = ["上装","裤子","半裙","连衣裙","外套"];
const ORNAMENTS_CLASSIFICATION = ["耳环","项链","胸针","帽子","围巾","皮带","墨镜","包包","鞋子"];

/**
 * 比例
 */
const PROPORTION_30 = "30%";
const PROPORTION_50 = "50%";
const PROPORTION_70 = "70%";

/**
 * 风格类型
 */
const STYLE_AVANT = "前卫";
const STYLE_DRAMATIC = "戏剧";
const STYLE_EXOTIC = "异域";
const STYLE_ROMANTIC = "浪漫";
const STYLE_CLASSICAL = "古典";
const STYLE_GRACE = "优雅";
const STYLE_NATURAL = "自然";
const STYLE_GIRL = "少女";
const STYLE_JUVENILE = "少年";
const STYLE_ROMAN = "罗曼";

/**
 * 古典>前卫>少年>戏剧 此四种属性为偏直线型属性
 */
 const STRAIGHT_STYLE = [STYLE_CLASSICAL,STYLE_AVANT,STYLE_JUVENILE,STYLE_DRAMATIC];
 /**
  * 优雅>自然>少女>浪漫>罗曼>异域 此六种属性为偏曲线型属性
  */
 const  CURVE_STYLE = [STYLE_GRACE,STYLE_NATURAL,STYLE_GIRL,STYLE_ROMANTIC,STYLE_ROMAN,STYLE_EXOTIC];
 /**
  * 人的优先风格:古典 优雅 前卫 自然 少年 少女
  */
 const  PERSON_STYLE = [STYLE_CLASSICAL,STYLE_GRACE,STYLE_AVANT,STYLE_NATURAL,STYLE_JUVENILE,STYLE_GIRL];
 
 /**
  * 有两个70%及以上属性在偏直线型中时,特例风格类型的优先顺序
  */
 const  STRAIGHT_FIRST = [STYLE_AVANT,STYLE_CLASSICAL,STYLE_JUVENILE,STYLE_DRAMATIC];
 
 /**
  * 有两个70%及以上属性在偏曲线型中时,特例风格类型的优先顺序
  */
 const CURVE_FIRST = [STYLE_GRACE,STYLE_NATURAL,STYLE_GIRL,STYLE_ROMANTIC,STYLE_ROMAN,STYLE_EXOTIC];

 function findIndex(clothesTypes,type){
    for (let i = 0; i < clothesTypes.length; i++) {
        if (type.type==clothesTypes[i].type){
            return i;
        }
    }
    throw "衣服没有["+type.type+"]属性";
}

/**
 * 在开始所有匹配计算前,针对是特例的服饰的风格属性进行过滤(根据人的风格属性)
 * @param person
 * @param clothes
 * @return
 */
 function exceptionFilter(person,clothes){
    let personTypes = [...person.types];
    let clothesTypes = [...clothes.types];
    if (personTypes.length == 0){
        return clothes;
    }
    //标记人的风格中有几项 人的优先风格且等于70%
    let FLAG_70 = [];
    //标记人的风格中有几项 人的优先风格且等于50%
    let FLAG_50 = [];
    //标记人的风格中有几项 人的优先风格且等于30%
    let FLAG_30 = [];
    //标记人的风格中有几项是直线型的优先风格且等于70%
    let STRAIGHT_FLAG_70 = [];
    //标记人的风格中有几项是曲线型的优先风格且等于70%
    let CURVE_FLAG_70 = [];
    //标记人的风格中有几项是直线型的优先风格且等于50%
    let STRAIGHT_FLAG_50 = [];
    //标记人的风格中有几项是曲线型的优先风格且等于50%
    let CURVE_FLAG_50 = [];
    //标记人的风格中有几项是直线型的优先风格且等于30%
    let STRAIGHT_FLAG_30 = [];
    //标记人的风格中有几项是曲线型的优先风格且等于30%
    let CURVE_FLAG_30 = [];
    //标记人的风格中有几项是直线型的优先风格
    let STRAIGHT_FLAG = [];
    //标记人的风格中有几项是曲线型的优先风格
    let CURVE_FLAG = [];

    //统计各类别信息
    for (let personType of personTypes) {
        let type = personType.type;
        let typeProportion = personType.typeProportion;
        if (typeProportion==PROPORTION_70){
            FLAG_70.push(personType);
            if (STRAIGHT_STYLE.includes(type)){
                STRAIGHT_FLAG.push(personType);
                STRAIGHT_FLAG_70.push(personType);
            }else if (CURVE_STYLE.includes(type)){
                CURVE_FLAG.push(personType);
                CURVE_FLAG_70.push(personType);
            }
        }else if (typeProportion==PROPORTION_50){
            FLAG_50.push(personType);
            if (STRAIGHT_STYLE.includes(type)){
                STRAIGHT_FLAG.push(personType);
                STRAIGHT_FLAG_50.push(personType);
            }else if (CURVE_STYLE.includes(type)){
                CURVE_FLAG.push(personType);
                CURVE_FLAG_50.push(personType);
            }
        }else if (typeProportion==PROPORTION_30){
            FLAG_30.push(personType);
            if (STRAIGHT_STYLE.includes(type)){
                STRAIGHT_FLAG.push(personType);
                STRAIGHT_FLAG_30.push(personType);
            }else if (CURVE_STYLE.includes(type)){
                CURVE_FLAG.push(personType);
                CURVE_FLAG_30.push(personType);
            }
        }
    }
    //筛选出的属性在clothes的属性中的位置下标
    let index = 0;
    //如有两个及以上70%属性在直线型中,则按直线型优先级STRAIGHT_FIRST判定特例服饰的风格属性
    //反之则按曲线型优先级CURVE_FIRST判定
    //优先属性temp
    let temp = null;
    //type的temp
    let typeTemp = null;
    //第一种情况 即存在70%的风格时
    try {
        if (FLAG_70.length>0){
            //在人的优先特质中,人有且只有一个为70%,则设此特质为服饰特质
            if (FLAG_70.length==1){
                index = findIndex(clothesTypes,FLAG_70[0]);
                clothes.types = [clothesTypes[index]];
                return clothes;
            }
            //有两种或以上70%的优先风格
            else {
                if (STRAIGHT_FLAG_70.length>=2){
                    typeTemp = STRAIGHT_FLAG_70;
                    temp = STRAIGHT_FIRST;
                }else if (CURVE_FLAG_70.length>=2){
                    typeTemp = CURVE_FLAG_70;
                    temp = CURVE_FIRST;
                }
                if (temp != null){
                    //循环优先风格 看哪一个风格先存在
                    for (let style of temp) {
                        for (let type of typeTemp) {
                            if (style==type.type){
                                index = findIndex(clothesTypes,type);
                                clothes.types = [clothesTypes[index]];
                                return clothes;
                            }
                        }
                    }
                }
                //两个70%一个在直线 一个在曲线,则再比较直和曲中50%数量的多少,直多按直线70%的属性给,反之亦然
                if (STRAIGHT_FLAG_70.length==1&&CURVE_FLAG_70.length==1){
                    //如果有50%的属性
                    if (STRAIGHT_FLAG_50.length>0||CURVE_FLAG_50.length>0){
                        if (STRAIGHT_FLAG_50.length>CURVE_FLAG_50.length){
                            index = findIndex(clothesTypes,STRAIGHT_FLAG_70[0]);
                            clothes.types = [clothesTypes[index]];
                            return clothes;
                        }else if (STRAIGHT_FLAG_50.length<CURVE_FLAG_50.length){
                            index = findIndex(clothesTypes,CURVE_FLAG_70[0]);
                            clothes.types = [clothesTypes[index]];
                            return clothes;
                        }
                        //50%比例相等 判断30%
                        else {
                            if (STRAIGHT_FLAG_30.length>0||CURVE_FLAG_30.length>0){
                                if (STRAIGHT_FLAG_30.length>CURVE_FLAG_30.length){
                                    index = findIndex(clothesTypes,STRAIGHT_FLAG_70[0]);
                                    clothes.types = [clothesTypes[index]];
                                    return clothes;
                                }else if (STRAIGHT_FLAG_30.length<CURVE_FLAG_30.length){
                                    index = findIndex(clothesTypes,CURVE_FLAG_70[0]);
                                    clothes.types = [clothesTypes[index]];
                                    return clothes;
                                }
                                //30%、50%均相等 判断人的属性中直和曲的类型数量
                                else {
                                    //直小于曲  按曲
                                    if (STRAIGHT_FLAG.length<CURVE_FLAG.length){
                                        index = findIndex(clothesTypes,CURVE_FLAG_70[0]);
                                    }
                                    //直大于等于曲 均按直
                                    else {
                                        index = findIndex(clothesTypes,STRAIGHT_FLAG_70[0]);
                                    }
                                    clothes.types = [clothesTypes[index]];
                                    return clothes;
                                }
                            }
                            //没有30% 直接判直曲类型数量
                            else {
                                //直小于曲  按曲
                                if (STRAIGHT_FLAG.length<CURVE_FLAG.length){
                                    index = findIndex(clothesTypes,CURVE_FLAG_70[0]);
                                }
                                //直大于等于曲 均按直
                                else {
                                    index = findIndex(clothesTypes,STRAIGHT_FLAG_70[0]);
                                }
                                clothes.types = [clothesTypes[index]];
                                return clothes;
                            }
                        }
                    }
                    //没有50%  比较30%
                    else {
                        if (STRAIGHT_FLAG_30.length>0||CURVE_FLAG_30.length>0){
                            if (STRAIGHT_FLAG_30.length>CURVE_FLAG_30.length){
                                index = findIndex(clothesTypes,STRAIGHT_FLAG_70[0]);
                            }else if (STRAIGHT_FLAG_30.length<CURVE_FLAG_30.length){
                                index = findIndex(clothesTypes,CURVE_FLAG_70[0]);
                            }
                            //30%相等 判断人的属性中直和曲的类型数量
                            else {
                                //直小于曲  按曲
                                if (STRAIGHT_FLAG.length<CURVE_FLAG.length){
                                    index = findIndex(clothesTypes,CURVE_FLAG_70[0]);
                                }
                                //直大于等于曲 均按直
                                else {
                                    index = findIndex(clothesTypes,STRAIGHT_FLAG_70[0]);
                                }
                            }
                        }
                        clothes.types = [clothesTypes[index]];
                        return clothes;
                    }
                }
            }
        }
        //没有70% 则计算50%
        else {
            if (FLAG_50.length>0){
                //在人的优先特质中,人有且只有一个为50%,则设此特质为服饰特质
                if (FLAG_50.length==1){
                    index = findIndex(clothesTypes,FLAG_50[0]);
                    clothes.types = [clothesTypes[index]];
                    return clothes;
                }
                //有两种或以上50%的优先风格
                else {
                    if (STRAIGHT_FLAG_50.length>=2){
                        typeTemp = STRAIGHT_FLAG_50;
                        temp = STRAIGHT_FIRST;
                    }else if (CURVE_FLAG_50.length>=2){
                        typeTemp = CURVE_FLAG_50;
                        temp = CURVE_FIRST;
                    }
                    if (temp != null){
                        for (let style of temp) {
                            for (let type of typeTemp) {
                                if (style==type.type){
                                    index = findIndex(clothesTypes,type);
                                    clothes.types = [clothesTypes[index]];
                                    return clothes;
                                }
                            }
                        }
                    }
                    //只有两个50%一个在直线 一个在曲线,则再比较直和曲中30%数量的多少,直多按直线50%的属性给,反之亦然
                    if (STRAIGHT_FLAG_50.length==1&&CURVE_FLAG_50.length==1){
                        //如果有30%的属性
                        if (STRAIGHT_FLAG_30.length>0||CURVE_FLAG_30.length>0){
                            if (STRAIGHT_FLAG_30.length>CURVE_FLAG_30.length){
                                index = findIndex(clothesTypes,STRAIGHT_FLAG_50[0]);
                            }else if (STRAIGHT_FLAG_30.length<CURVE_FLAG_30.length){
                                index = findIndex(clothesTypes,CURVE_FLAG_50[0]);
                            }
                            //30%比例相等 判断直曲数量
                            else {
                                //直小于曲  按曲
                                if (STRAIGHT_FLAG.length<CURVE_FLAG.length){
                                    index = findIndex(clothesTypes,CURVE_FLAG_50[0]);
                                }
                                //直大于等于曲 均按直
                                else {
                                    index = findIndex(clothesTypes,STRAIGHT_FLAG_50[0]);
                                }
                            }
                        }
                        //没有30% 直接判类型数量
                        else {
                            //直小于曲  按曲
                            if (STRAIGHT_FLAG.length<CURVE_FLAG.length){
                                index = findIndex(clothesTypes,CURVE_FLAG_50[0]);
                            }
                            //直大于等于曲 均按直
                            else {
                                index = findIndex(clothesTypes,STRAIGHT_FLAG_50[0]);
                            }
                        }
                        clothes.types = [clothesTypes[index]];
                        return clothes;
                    }
                }
            }
        }
    }
    catch (e){
        console.log("发生异常",e);
        return clothes;
    }
    return clothes;
}
let types1 = [
    {typeProportion: "70%", type:"优雅"},
    {typeProportion: "30%", type:"戏剧"},
    {typeProportion: "50%", type:"古典"},
    {typeProportion: "50%", type:"前卫"},
    {typeProportion: "50%", type:"异域"},
    {typeProportion: "50%", type:"自然"},
]
let types2 = [
    {typeProportion: "10%", type: "自然", isRed: true},
    {typeProportion: "10%", type: "异域", isRed: true},
    {typeProportion: "10%", type: "前卫", isRed: true},
    {typeProportion: "10%", type: "古典", isRed: true},
    {typeProportion: "10%", type: "戏剧", isRed: true},
    {typeProportion: "10%", type: "优雅", isRed: true},
    {typeProportion: "10%", type: "浪漫", isRed: true},
    {typeProportion: "10%", type: "罗曼", isRed: true},
    {typeProportion: "10%", type: "少年", isRed: true},
    {typeProportion: "10%", type: "少女", isRed: true},
]
    
log(exceptionFilter({types:types1},{types:types2}).types)