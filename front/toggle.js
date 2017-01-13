import _ from 'lodash';

$onInit() {
  this.qroups = ['adx', 'account', 'campaign', 'deviceType', 'country', 'city', 'creative'];
  this.selectedGroups = [];
}

setGroups(groups) {
  this.query['groups'] = groups;
}

//toggle selection
toggleSelectedGroup(selectedGroup) {
  if ( this.existsSelectedGroup(selectedGroup) ) {
    this.selectedGroups = _.filter(this.selectedGroups, group => group !== selectedGroup);
  } else {
    this.selectedGroups.push(selectedGroup);
  }
  this.setGroups(this.selectedGroups);
}

//existing check
existsSelectedGroup (selectedGroup) {
  return _.includes(this.selectedGroups, selectedGroup);
}