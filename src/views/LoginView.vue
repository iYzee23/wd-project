<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <br>
                <h2>Login</h2>
                <br>
                <table>
                    <tr>
                        <td>Username: </td>
                        <td><input type="text" name="username" v-model="username"></td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td><input type="text" name="password" v-model="password"></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <br>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><button type="button" class="btn btn-outline-secondary" @click="login()">Login</button></td>
                    </tr>
                    <tr>
                        <td colspan="2">{{error}}</td>
                    </tr>
                </table>
                <br>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluid{
        display:flex;
        justify-content: center;
        text-align: center;
        border: 5px solid #C4A484;
    }
    .col-sm-12 h2{
        color:plum;
    }
    .footer{
        color:plum;
        font-size: 10px;
    }
</style>

<script>
import allUsers from '../data/allUsers.js'
export default {
    name:'LoginView',
    data(){
        return{
            username:'',
            password:'',
            error:'',
            users:allUsers
        }
    },
    methods:{
        login(){
            if(this.username=='' || this.password=='')
            {
                this.error='Sva polja moraju biti uneta'
            }
            else{
                let user=this.users.filter((u)=>{
                    return u.username == this.username && u.password == this.password;
                })
                if (user.length == 0) {
                    this.error = 'Neispravno uneti podaci'
                }
                else {
                    //console.log(user)
                    localStorage.setItem('user', user[0].username)
                    this.error=""
                    this.$router.push('/')
                }
            }
            
        }
    }
} 
</script>