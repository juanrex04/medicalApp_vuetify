<template>
    <nav>
        <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="100" class="cyan darken-1">
            <v-list>
                <v-list-item class="mb-12">
                    <v-list-item-action></v-list-item-action>
                </v-list-item>
            </v-list>
            <v-list flat>
                <!--Dashboard-->
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2">dashboard</v-icon>
                        <v-list-item-subtitle align="center">Dashboard</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <!--Reports-->
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-notes-medical</v-icon>
                        <v-list-item-subtitle align="center">Report</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <!--Doctors--->
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-user-md</v-icon>
                        <v-list-item-subtitle align="center">Doctor</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <!--Signature--->
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2">fas fa-signature</v-icon>
                        <v-list-item-subtitle align="center">Tracker</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <!--Styling-->
            <v-list style="position: absolute; bottom: 0;" class="ml-3" flat>
                <v-list-item router to="/">
                    <v-list-item-action>
                        <v-icon right>
                            fas fa-sign-out-alt
                        </v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>export default {
    data: () => ({
        //Used for the v-model of the navigation drawer
        //This is used to open and close the drawer
        drawer: true,


    }),
    components: {

    },


}
</script>