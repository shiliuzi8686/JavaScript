const {log} = console

const nodes = []
// let curNode = $('#btn')
let curNode = document.getElementById("btn")

while(curNode){
    nodes.push(curNode)
    curNode = curNode.parentNode
}

nodes.forEach( (node) => {
    const nodeName = node.nodeName.toLowerCase()

    node.addEventListener(
        'click',
        (event) => {
            log(event.eventPhase,'trap',nodeName)
        },
        true
    )
    
    node.addEventListener(
        'click',
        (event) => {
            log(event.eventPhase,'bubble',nodeName)
        },
        false
    )

    node.onclick = function(event){
        if(event.eventPhase == 2){
            // 只有event.target才是本次点击事件的目标，才会处理这个事件
            // 其余的节点只会短暂的显示在 event.currentTarget 
            // 应该是每个节点做了判断 event.target 是不是 event.currentTarget，如是则处理；不是，则捕获或冒泡
            log(event.eventPhase + '目前' + nodeName + '在处理')
        }
    }
})

window.addEventListener('click',(event) => log(event.eventPhase,'trap','window'),true)
window.addEventListener(
    'click',
    (event) => log(event.eventPhase,'bubble','window'),
    false
)