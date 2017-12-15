<template>
    <div class="panel-body" style="width: 1000px; margin: 10px auto; padding: 10px;">
      <a class="md-title" target="_blank" href="https://vuematerial.io/">demo</a>
      <div>
        <md-button class="md-raised">Default</md-button>
        <md-button class="md-icon-button md-primary">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
      <span class="md-title">Tab选项卡</span>
      <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home">
          Home Tab
        </md-tab>

        <md-tab id="tab-pages" md-label="Pages">
          Pages tab
          <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
        </md-tab>

        <md-tab id="tab-posts" md-label="Posts">
          Posts tab
          <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
        </md-tab>

        <md-tab id="tab-favorites" md-label="Favorites">
          Favorites tab
          <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
        </md-tab>
      </md-tabs>
      <span class="md-title">Table表格</span>
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Name</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>Gender</md-table-head>
          <md-table-head>Job Title</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell md-numeric>1</md-table-cell>
          <md-table-cell>Shawna Dubbin</md-table-cell>
          <md-table-cell>sdubbin0@geocities.com</md-table-cell>
          <md-table-cell>Male</md-table-cell>
          <md-table-cell>Assistant Media Planner</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell md-numeric>2</md-table-cell>
          <md-table-cell>Odette Demageard</md-table-cell>
          <md-table-cell>odemageard1@spotify.com</md-table-cell>
          <md-table-cell>Female</md-table-cell>
          <md-table-cell>Account Coordinator</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell md-numeric>3</md-table-cell>
          <md-table-cell>Vera Taleworth</md-table-cell>
          <md-table-cell>vtaleworth2@google.ca</md-table-cell>
          <md-table-cell>Male</md-table-cell>
          <md-table-cell>Community Outreach Specialist</md-table-cell>
        </md-table-row>
      </md-table>
      <span class="md-title">底部切换栏</span>
      <div class="phone-viewport">
        <md-bottom-bar md-sync-route>
          <md-bottom-bar-item to="" md-label="Home" md-icon="home"></md-bottom-bar-item>
          <md-bottom-bar-item to="" md-label="Posts" md-icon="menu"></md-bottom-bar-item>
          <md-bottom-bar-item to="" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>

      <div class="phone-viewport">
        <md-bottom-bar class="md-accent" md-sync-route>
          <md-bottom-bar-item to="" md-label="Home" md-icon="home"></md-bottom-bar-item>
          <md-bottom-bar-item to="" md-label="Posts" md-icon="menu"></md-bottom-bar-item>
          <md-bottom-bar-item to="" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>
      <span class="md-title">Datepicker日历</span>
      <md-datepicker v-model="selectedDate"></md-datepicker>
      <span class="md-title">Dialog弹窗</span>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Preferences</md-dialog-title>

        <md-tabs md-dynamic-height>
          <md-tab md-label="General">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>

          <md-tab md-label="Activity">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>

          <md-tab md-label="Account">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>
        </md-tabs>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
          <md-button class="md-primary" @click="showDialog = false">Save</md-button>
        </md-dialog-actions>
      </md-dialog>
      <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
      <span class="md-title">左右侧列表隐藏显示</span>
      <div class="page-container md-layout-column">
        <md-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">My Title</span>

          <div class="md-toolbar-section-end">
            <md-button @click="showSidepanel = true">Favorites</md-button>
          </div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">My App name</span>
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-drawer>

        <md-drawer class="md-right" :md-active.sync="showSidepanel">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">Favorites</span>
          </md-toolbar>

          <md-list>
            <md-list-item>
              <span class="md-list-item-text">Abbey Christansen</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <span class="md-list-item-text">Alex Nelson</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item>
              <span class="md-list-item-text">Mary Johnson</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon>chat_bubble</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-drawer>

        <md-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
        </md-content>
      </div>
      <span class="md-title">Form表单</span>
      <form novalidate class="md-layout-row md-gutter" @submit.prevent="validateUser">
        <md-card class="md-flex-50 md-flex-small-100">
          <md-card-header>
            <div class="md-title">Users</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout-row md-layout-wrap md-gutter">
              <div class="md-flex md-flex-small-100">
                <md-field :class="getValidationClass('firstName')">
                  <label for="first-name">First Name</label>
                  <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                  <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                </md-field>
              </div>

              <div class="md-flex md-flex-small-100">
                <md-field :class="getValidationClass('lastName')">
                  <label for="last-name">Last Name</label>
                  <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                  <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                </md-field>
              </div>
            </div>

            <div class="md-layout-row md-gutter md-layout-wrap">
              <div class="md-flex md-flex-small-100">
                <md-field :class="getValidationClass('gender')">
                  <label for="gender">Gender</label>
                  <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                    <md-option></md-option>
                    <md-option value="M">M</md-option>
                    <md-option value="F">F</md-option>
                  </md-select>
                  <span class="md-error">The gender is required</span>
                </md-field>
              </div>

              <div class="md-flex md-flex-small-100">
                <md-field :class="getValidationClass('age')">
                  <label for="age">Age</label>
                  <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                  <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
                </md-field>
              </div>
            </div>

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>
      <span class="md-title">Checkbox</span>
      <md-checkbox v-model="array" value="1">Array</md-checkbox>
      <md-checkbox v-model="array" value="2">Array</md-checkbox>
      <md-checkbox v-model="boolean">Boolean</md-checkbox>
      <md-checkbox v-model="string" value="my-checkbox">String</md-checkbox>
      <md-checkbox v-model="novalue">No Value</md-checkbox>
      <md-checkbox v-model="disabled" disabled>Disabled</md-checkbox>

      <table>
        <tr>
          <th>Array</th>
          <th>Boolean</th>
          <th>String</th>
          <th>No Value</th>
        </tr>

        <tr>
          <td>{{ array }}</td>
          <td>{{ boolean }}</td>
          <td>{{ string }}</td>
          <td>{{ novalue }}</td>
        </tr>
      </table>
      <span class="md-title">Chips</span>
      <md-chips v-model="fruits" md-placeholder="Add fruit..."></md-chips>
      <span class="md-title">文件上传</span>
      <md-field>
        <label>Single</label>
        <md-file v-model="single" />
      </md-field>

      <md-field>
        <label>Upload files</label>
        <md-file v-model="placeholder" placeholder="A nice input placeholder" />
      </md-field>

      <md-field>
        <label>Disabled</label>
        <md-file v-model="disabled" disabled/>
      </md-field>

      <md-field>
        <label>Initial value</label>
        <md-file v-model="initial" />
      </md-field>

      <md-field>
        <label>Multiple</label>
        <md-file v-model="multiple" multiple />
      </md-field>

      <md-field>
        <label>Only images</label>
        <md-file v-model="single" accept="image/*" />
      </md-field>
      <span class="md-title">输入框</span>
      <md-field>
        <label>Initial Value</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Initial Value (Read Only)</label>
        <md-input v-model="initial" readonly></md-input>
      </md-field>

      <md-field>
        <label>Type here!</label>
        <md-input v-model="type"></md-input>
        <span class="md-helper-text">Helper text</span>
      </md-field>

      <md-field>
        <label>With label</label>
        <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
      </md-field>

      <md-field md-inline>
        <label>Inline</label>
        <md-input v-model="inline"></md-input>
      </md-field>

      <md-field>
        <label>Number</label>
        <md-input v-model="number" type="number"></md-input>
      </md-field>

      <md-field>
        <label>Textarea</label>
        <md-textarea v-model="textarea"></md-textarea>
      </md-field>

      <md-field>
        <label>Textarea with Autogrow</label>
        <md-textarea v-model="autogrow" md-autogrow></md-textarea>
      </md-field>

      <md-field>
        <label>Disabled</label>
        <md-input v-model="disabled" disabled></md-input>
      </md-field>
      <span class="md-title">Radio</span>
      <md-radio v-model="radio" :value="false">Boolean</md-radio>
      <md-radio v-model="radio" value="my-radio">String</md-radio>
      <md-radio v-model="radio">No Value</md-radio>
      <md-radio v-model="radio" disabled>Disabled</md-radio>
      <span class="md-title">select</span>
      <div class="md-layout-row md-gutter">
        <div class="md-flex">
          <md-field>
            <label for="movie">Movie</label>
            <md-select v-model="movie" name="movie" id="movie">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-flex">
          <md-field>
            <md-select v-model="country" name="country" id="country" placeholder="Country">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-flex">
          <md-field>
            <label for="font">Font</label>
            <md-select v-model="font" name="font" id="font">
              <md-option value="arial">Arial</md-option>
              <md-option value="calibri">Calibri</md-option>
              <md-option value="cambria">Cambria</md-option>
              <md-option value="comic-sans">Comic Sans</md-option>
              <md-option value="consolas">Consolas</md-option>
              <md-option value="courier">Courier</md-option>
              <md-option value="droid-sans">Droid Sans</md-option>
              <md-option value="georgia">Georgia</md-option>
              <md-option value="helvetica">Helvetica</md-option>
              <md-option value="impact">Impact</md-option>
              <md-option value="roboto">Roboto</md-option>
              <md-option value="segoe-ui">Segoe UI</md-option>
              <md-option value="times-new-roman">Times New Roman</md-option>
              <md-option value="ubuntu">Ubuntu</md-option>
              <md-option value="verdana">Verdana</md-option>
            </md-select>
          </md-field>
        </div>
      </div>

      <md-button class="md-primary md-raised" @click="movie = 'pulp-fiction'">Set Pulp Fiction</md-button>
      <span class="md-title">Switch</span>
      <md-switch v-model="array" value="1">Array</md-switch>
      <md-switch v-model="array" value="2">Array</md-switch>
      <md-switch v-model="boolean">Boolean</md-switch>
      <md-switch v-model="string" value="my-switch">String</md-switch>
      <md-switch v-model="novalue">No Value</md-switch>
      <md-switch v-model="disabled" disabled>Disabled</md-switch>

      <table>
        <tr>
          <th>Array</th>
          <th>Boolean</th>
          <th>String</th>
          <th>No Value</th>
        </tr>

        <tr>
          <td>{{ array }}</td>
          <td>{{ boolean }}</td>
          <td>{{ string }}</td>
          <td>{{ novalue }}</td>
        </tr>
      </table>
      <span class="md-title">menu</span>
      <md-menu>
        <md-button md-menu-trigger>Default</md-button>

        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>

      <md-menu md-size="medium" md-align-trigger>
        <md-button md-menu-trigger>Align with trigger</md-button>

        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>

      <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
        <md-button md-menu-trigger>Custom Offset</md-button>

        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>
      <span class="md-title">steppers</span>
      <md-steppers md-vertical>
        <md-step id="first" md-label="First Step" md-description="Optional">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        </md-step>

        <md-step id="second" md-label="Second Step">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        </md-step>

        <md-step id="third" md-label="Third Step">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        </md-step>
      </md-steppers>
      <span class="md-title">tooltip</span>
      <md-avatar>
        <img src="../assets/logo.png" alt="o">
        <md-tooltip md-direction="top">Top</md-tooltip>
      </md-avatar>

      <md-avatar>
        <img src="../assets/logo.png" alt="o">
        <md-tooltip md-direction="right">Right</md-tooltip>
      </md-avatar>

      <md-avatar>
        <img src="../assets/logo.png" alt="o">
        <md-tooltip md-direction="bottom">Bottom</md-tooltip>
      </md-avatar>

      <md-avatar>
        <img src="../assets/logo.png" alt="o">
        <md-tooltip md-direction="left">Left</md-tooltip>
      </md-avatar>
      <span class="md-title">Layout</span>
      <div class="md-layout md-gutter">
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
      </div>
      <br/>
      <div class="md-layout">
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
      </div>
      <br/>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-15"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item md-size-15"></div>
      </div>
      <span class="md-title">Scrollbar</span>
      <md-content class="md-scrollbar">
        <p>Autem enim asperiores consequuntur neque sequi ea similique ex maxime, repudiandae doloremque aliquam exercitationem omnis assumenda. Rem suscipit pariatur vero facere?</p>
        <p>Necessitatibus aut cumque sit ad. Tempora perferendis nostrum, in assumenda accusantium vitae vero pariatur sapiente nam quisquam, ducimus distinctio quae nisi.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed perspiciatis sit quaerat molestiae iusto adipisci possimus cum modi quam qui esse vero provident, ad, deserunt laborum quas eligendi beatae quibusdam.</p>
      </md-content>
    </div>
</template>

<style scoped="">
  .md-title {line-height: 50px; display: block}
  .panel-body {background: #F5F5F5}
  .md-layout-item {
    height: 40px;
  }
  .md-content {
    max-width: 400px;
    max-height: 200px;
    overflow: auto;
  }
  .md-layout-item:after {
     width: 100%;
     height: 100%;
     display: block;
     background: orangered;
     content: " ";
   }
  .phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid indianred;
    background: rgba(#000, .06);
  }

  .md-content {
    padding: 16px;
  }
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .md-dialog {
    max-width: 768px;
  }
</style>

<script>
  import Vue from 'vue'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
    export default ({
        data() {
            return {
              showDialog: false,
              showNavigation: false,
              showSidepanel: false,
              radio: false,
              initial: 'vue-material-is-awesome.jpg',
              single: null,
              placeholder: null,
              type: null,
              withLabel: null,
              inline: null,
              array: [],
              boolean: false,
              string: null,
              novalue: null,
              disabled: true,
              number: null,
              textarea: null,
              autogrow: null,
              multiple: null,
              fruits: [
                'Orange',
                'Apple',
                'Pineapple'
              ],
              selectedDate : '',
              array: [],
              boolean: false,
              string: null,
              novalue: null,
              disabled: true,
              form: {
                firstName: null,
                lastName: null,
                gender: null,
                age: null,
                email: null,
              },
              userSaved: false,
              sending: false,
              lastUser: null
            }
        },
        mixins: [validationMixin],
        validations: {
          form: {
            firstName: {
              required,
              minLength: minLength(3)
            },
            lastName: {
              required,
              minLength: minLength(3)
            },
            age: {
              required,
              maxLength: maxLength(3)
            },
            gender: {
              required
            },
            email: {
              required,
              email
            }
          }
        },
        mounted(){
          window.onerror = SlyarErrors;
        },
        methods: {
          SlyarErrors(){
            return true;
          },
          getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
              return {
                'md-invalid': field.$invalid && field.$dirty
              }
            }
          },
          clearForm () {
            this.$v.$reset()
            this.form.firstName = null
            this.form.lastName = null
            this.form.age = null
            this.form.gender = null
            this.form.email = null
          },
          saveUser () {
            this.sending = true

            // Instead of this timeout, here you can call your API
            window.setTimeout(() => {
              this.lastUser = `${this.form.firstName} ${this.form.lastName}`
              this.userSaved = true
              this.sending = false
              this.clearForm()
            }, 1500)
          },
          validateUser () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
              this.saveUser()
            }
          }
        }
    })
</script>
