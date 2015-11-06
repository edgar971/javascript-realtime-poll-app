/**
 * Created by edgar971 on 11/5/15.
 */
var React = require('react'),
    Attendance;

Attendance = React.createClass({
    addMemberRow(member,i) {
      return(
          <tr key={i}>
              <td>{member.name}</td>
              <td>{member.id}</td>
          </tr>
      )
    },
    render() {
        return(
            <section>
                <h2>Attendance - {this.props.audience.length} members</h2>
                <ul>
                    <table className="responsive-table">
                        <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="id">Socket ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.audience.map(this.addMemberRow)}
                        </tbody>
                    </table>
                </ul>
            </section>
        )
    }
});

module.exports = Attendance;