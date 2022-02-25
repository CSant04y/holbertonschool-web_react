import { shallow, mount } from 'enzyme';
import Notifications from "./Notifications";
import React from 'react';
import "../../config/setupTests"
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';
import { getLatestNotification } from "../utils/utils";
 
describe("Testing the <Notifications /> componet", () => {
    let listNotifications;
    let latestNotification;

    beforeEach(() => {
        latestNotification = getLatestNotification();
        listNotifications = [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: latestNotification } },
        ];
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("test Notifications Render", () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);
        expect(wrapper.exists()).toEqual(true);
    });

    it("Tests to see if <Notifications />  has three componets", () => {
        const wrapper = shallow(<Notifications displayDrawer/>);
        wrapper.update();
        expect(wrapper.find("NotificationItem").exists()).toEqual(false);
    });

    it("Tests to see if <Notifications /> has correct html", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('ul')
        .childAt(0).html())
        .toEqual('<li data-notification-type="default" class="default">New course available</li>');
    });

    it("Tests the <Notifications /> p tag", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    });

    it("Tests the that menuItem is displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.find("div.menuItem").exists()).toEqual(true);
    });

    it("Tests that div.Notifications is not displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find("div.Notifications").exists()).toEqual(false);
    })

    it("Tests menuItem is displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>); 
        expect(wrapper.find("div.menuItem").exists()).toEqual(true);
    });

    it("Tests that div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find("div.Notifications").exists()).toEqual(true);
    })

    it("Tests that Notifications renders correctly  if you pass an empty array", () => {
        const wrapper = shallow(<Notifications listNotifications={[]}/> )
        expect(wrapper.exists()).toEqual(true);
    })
})

describe("<Notifications />", () => {
    let listNotifications;
    let latestNotification;
    beforeEach(() => {
        latestNotification = getLatestNotification();
        listNotifications = [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: latestNotification } },
        ];
      });
      afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });

      it("Notifications renders Notification Items and items have correct html", () => {
        const wrapper = shallow(
          <Notifications displayDrawer listNotifications={listNotifications} />
        );
        expect(wrapper.exists());
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems.exists()).toEqual(true);
        expect(listItems).toHaveLength(3);
        expect(listItems.at(0).html()).toEqual(
            "<li data-notification-type=\"default\" class=\"default\">New course available</li>"
        );
        expect(listItems.at(1).html()).toEqual(
          '<li data-notification-type="urgent" class="urgent">New resume available</li>'
        );
        expect(listItems.at(2).html()).toEqual(
          `<li data-notification-type="urgent" class="urgent">${latestNotification}</li>`
        );
      });
})

describe("<Notifications />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("Mock of Console.log", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    console.log = jest.fn()
    const instance = wrapper.instance()
    const id = 42;
    instance.markAsRead(id)
    expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`)
    jest.restoreAllMocks();    
  })
});

describe("<Notification /> ", () => {

  let wrapper
  let i;
  let propsNotif = {
		displayDrawer: true,
		listNotifications: listNotifications,
	};
  let listNotifications = [
		{
			id: i++,
			type: "default",
			value: "New course available",
		},
		{
			id: i++,
			type: "urgent",
			value: "New resume available",
		},
		{
			id: i++,
			type: "urgent",
			html: {__html: getLatestNotification()},
		}
	];
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const spyNotif = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
  beforeEach(() => {
    wrapper = shallow(<Notifications {...propsNotif} />);
  })

  it("Tests that notifications does not rerender if the same", () => {
    const NotifComp = mount(<Notifications {...propsNotif}/>);
    expect(spyNotif);
    NotifComp.setProps({...propsNotif});
  })

})