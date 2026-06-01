import React from "react";

const UserCard = ({ userInfo }) => {
  return (
    <div className="p-2 bg-white rounded-xl shadow-md shadow-gray-100 border border-gray-200/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {userInfo?.profileImageUrl ? (
            <img
              src={userInfo.profileImageUrl}
              alt={userInfo?.name || "User"}
              className="h-12 w-12 rounded-full object-cover border-2 border-white"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
              {userInfo?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}

          <div>
            <p className="text-lg font-medium">
              {userInfo?.name || "Unknown User"}
            </p>

            <p className="text-sm text-gray-500">
              {userInfo?.email || "No Email"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-3 mt-5">
        <StatCard
          label="Pending"
          count={userInfo?.pendingTasks || 0}
          status="pending"
        />

        <StatCard
          label="In Progress"
          count={userInfo?.inProgressTasks || 0}
          status="in-progress"
        />

        <StatCard
          label="Completed"
          count={userInfo?.completedTasks || 0}
          status="completed"
        />
      </div>
    </div>
  );
};

export default UserCard;

const StatCard = ({ label, count, status }) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";

      case "in-progress":
        return "bg-blue-100 text-blue-800";

      case "completed":
        return "bg-green-100 text-green-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={`flex flex-1 text-[10px] font-medium ${getStatusTagColor()} px-4 py-0.5 rounded-lg items-center gap-1`}
    >
      <span className="text-[12px] font-semibold">{count}</span>
      <span>{label}</span>
    </div>
  );
};