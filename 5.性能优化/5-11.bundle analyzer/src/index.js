import $ from 'jquery'
import _ from 'lodash'

$(".red").click(function(){
    console.log(_.chunk([13,4,5,5,6],2))
})